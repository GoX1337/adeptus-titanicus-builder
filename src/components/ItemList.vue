<template>
    <div class="col-md-8">
        <h2>List</h2>
        <Item v-for="(item, index) in armyList" :key="item.name + index"  v-bind:item="item" v-bind:index="index"
                @openModal="openWeaponModal"
                @removeItem="removeItem"
                @moveTopItem="moveTopItem"
                @moveDownItem="moveDownItem"
                @cloneItem="cloneItem"
                @removeWeapon="removeWeapon">
        </Item>
    </div>
</template>

<script>

import Item from './Item.vue';

const $ = window.$;

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}

export default {
    name: 'ItemList',
    props: ['armyList'],
    components: {
        Item 
    },
    methods: {
        removeItem (index, value) {
            this.armyList.splice(index, 1);
            this.$emit('updateTotal', -value);
            tooltipDispose();
        },
        moveTopItem (index, item) {
            if(index > 0){
                let topItem = this.armyList[index - 1];
                this.armyList.splice(index - 1, 1, item);
                this.armyList.splice(index, 1, topItem);
                tooltipDispose();
            }
            $('[data-toggle="tooltip"]').tooltip();
        },
        moveDownItem (index, item) {
            if(index < this.armyList.length - 1){
                let botItem = this.armyList[index + 1];
                this.armyList.splice(index + 1, 1, item);
                this.armyList.splice(index, 1, botItem);
                tooltipDispose();
            }
            $('[data-toggle="tooltip"]').tooltip();
        },
        cloneItem (index, item, cost) {
            this.armyList.splice(index + 1, 0, {...item});
            this.total += cost;
            this.$emit('updateTotal', cost);
            tooltipDispose();
        },
        openWeaponModal (index, titan, weaponType, titanWeaponAtt, modalTitle) {
            this.$emit('openModal', index, titan, weaponType, titanWeaponAtt, modalTitle);
        },
        removeWeapon (index, titanWeaponAtt) {
            let titan = this.armyList[index];
            this.total -= titan[titanWeaponAtt].cost;
            this.$emit('updateTotal', -titan[titanWeaponAtt].cost);
            titan[titanWeaponAtt] = null;
            this.armyList.splice(index, 1, titan);
            tooltipDispose();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
