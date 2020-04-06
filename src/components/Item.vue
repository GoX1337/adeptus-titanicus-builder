<template>
<div>
    <div class="card" style="background-color: #f2f2f2;">
        <div class="card-header">
            <div class="row">
                <div class="col-md-10">
                    <h5>{{ item.name + " (" + getTotalItemCost(item) + " pts)" }}</h5>
                </div>
                <div class="col-md-2">
                    <a href="#" v-on:click="moveTopItem(index, item)" data-toggle="tooltip" data-placement="top" title="Move top">
                        <img src="../assets/chevron-up.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                    </a>
                    <a href="#" v-on:click="moveDownItem(index, item)" data-toggle="tooltip" data-placement="top" title="Move down">
                        <img src="../assets/chevron-down.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                    </a>
                    <a href="#" v-on:click="cloneItem(index, item)" data-toggle="tooltip" data-placement="top" title="Duplicate">
                        <img src="../assets/files.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                    </a>
                    <a href="#" v-on:click="removeItem(index, item)" data-toggle="tooltip" data-placement="top" title="Delete">
                        <img src="../assets/x-circle-fill.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <Titan v-if="isTitan(item)" v-bind:item="item" v-bind:index="index" @openModal="openWeaponModal" @removeWeapon="removeWeapon"></Titan>
            <Banner v-if="isBanner(item)" v-bind:banner="item" v-bind:index="index"></Banner>
            <Maniple v-if="isManiple(item)" v-bind:maniple="item" v-bind:index="index"></Maniple>
        </div>
    </div>
</div>
</template>

<script>

import Titan from './Titan.vue';
import Banner from './Banner.vue';
import Maniple from './Maniple.vue';

export default {
  name: 'Item',
  props: ['item', 'index'],
  components: {
        Titan, Banner, Maniple
  },
  methods: {
     getTotalItemCost (item) {
        let total = item.cost;
        if(this.isTitan(item)){
            if(item.rightArm){
                total += item.rightArm.cost;
            }
            if(item.carapace){
                total += item.carapace.cost;
            }
            if(item.leftArm){
                total += item.leftArm.cost;
            }
        }
        return total;
    },
    isTitan (item){
        return item.type === "titan";
    },
    isBanner (item){
        return item.type === "banner";
    },
    isManiple (item){
        return item.type === "maniple";
    },
    hasCarapaceSlot (item){
        return Object.prototype.hasOwnProperty.call(item, 'carapace'); 
    },
    removeItem(index, item) {
       this.$emit('removeItem', index, this.getTotalItemCost(item));
    },
    moveTopItem (index, item) {
        this.$emit('moveTopItem', index, item);
    },
    moveDownItem (index, item) {
        this.$emit('moveDownItem', index, item);
    },
    cloneItem (index, item) {
        this.$emit('cloneItem', index, item, this.getTotalItemCost(item));
    },
    openWeaponModal (index, titan, weaponType, titanWeaponAtt, modalTitle) {
       this.$emit('openModal', index, titan, weaponType, titanWeaponAtt, modalTitle);
    },
    removeWeapon (index, titanWeaponAtt) {
       this.$emit('removeWeapon', index, titanWeaponAtt);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
