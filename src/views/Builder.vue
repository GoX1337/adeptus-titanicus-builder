<template>
    <div class="container-fluid" style="margin-top:2%;">
        <div class="row">
            <Menu @chooseItem="addItem"></Menu>
            <ItemList v-bind:armyList="armyList" @openModal="openWeaponModal" @updateTotal="updateTotal"></ItemList>
            <Total v-bind:total="total" v-bind:toSave="toSave" @listSaved="listSaved"></Total>
        </div>
        <Modal v-bind:weaponModal="weaponModal" v-bind:armyList="armyList" @updateTotal="updateTotal"></Modal>
    </div> 
</template>

<script>

import atdata from '@/data/at-data';
import Menu from '@/components/Menu.vue';
import ItemList from '@/components/ItemList.vue';
import Total from '@/components/Total.vue';
import Modal from '@/components/Modal.vue';

const $ = window.$;

export default {
    name: 'Builder',
    components: {
        Menu, Total, ItemList, Modal
    },
    data() {
        return {
            total: 0,
            armyList: [],
            weapons: atdata.weapons,
            titans: atdata.titans,
            banners: atdata.banners,
            maniples: atdata.maniples,
            weaponModal: {
                titanIndex: -1,
                title: "",
                titanWeaponAtt: "",
                weapons: []
            },
            toSave: false,
        }
    },
    methods: {
        addItem: function (item) {
            this.armyList.push({...item});
            this.total += item.cost;
        },
        openWeaponModal (index, titan, weaponType, titanWeaponAtt, modalTitle) {
            this.weaponModal.titanIndex = index;
            this.weaponModal.title = modalTitle;
            this.weaponModal.titanWeaponAtt = titanWeaponAtt;
            if(this.weapons[titan.id]){
                this.weaponModal.weapons = {...this.weapons[titan.id][weaponType]};
                $('#weaponModal').modal('toggle');
            }
        },
        updateTotal (value){
            this.total += value;
        },
        listSaved () {
            this.toSave = false;
        }
    },
    watch: {
        armyList: {
            handler() {
                localStorage.setItem('armyList', JSON.stringify(this.armyList));
                this.toSave = true;
            },
            deep: true
        },
        total: {
            handler() {
                localStorage.setItem('total', this.total);
                this.toSave = true;
            },
            deep: true
        }
    },
    mounted() {
        if (localStorage.getItem('armyList')){
            this.armyList = JSON.parse(localStorage.getItem('armyList'));
        } 
        if (localStorage.getItem('total')){
            this.total = localStorage.getItem('total');
        } 
    },
    updated: function () {
        this.$nextTick(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
}
</script>
