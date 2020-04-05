<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="./assets/at.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
            Adeptus Titanicus Army list builder
        </a>
    </nav>
    <div class="container-fluid" style="margin-top:2%;">
        <div class="row">
            <Menu @chooseItem="addItem"></Menu>
            <List v-bind:armyList="armyList" @openModal="openWeaponModal" @updateTotal="updateTotal"></List>
            <Total v-bind:total="total"></Total>
        </div>
    </div>
    <Modal v-bind:weaponModal="weaponModal" v-bind:armyList="armyList" @updateTotal="updateTotal"></Modal>
  </div>
</template>

<script>

import atdata from './data/at-data';
import Menu from './components/Menu.vue';
import List from './components/List.vue';
import Total from './components/Total.vue';
import Modal from './components/Modal.vue';

const $ = window.$;

export default {
    name: 'App',
    components: {
        Menu, Total, List, Modal
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
            }
        }
    },
    methods: {
        addItem: function (item) {
            this.armyList.push({...item});
            this.total += item.cost;
        },
        openWeaponModal (event) {
            let index = event.index;
            let titan = event.titan;
            let weaponType = event.weaponType;
            let titanWeaponAtt = event.titanWeaponAtt;
            let modalTitle = event.modalTitle;
            this.weaponModal.titanIndex = index;
            this.weaponModal.title = modalTitle;
            this.weaponModal.titanWeaponAtt = titanWeaponAtt;
            if(this.weapons[titan.type]){
                this.weaponModal.weapons = {...this.weapons[titan.type][weaponType]};
                $('#weaponModal').modal('toggle');
            }
        },
        updateTotal (value){
            this.total += value;
        }
    },
    updated: function () {
        this.$nextTick(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
}
</script>

<style></style>
