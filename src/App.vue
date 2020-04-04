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
            <div class="col-sm-2">
                <div class="list-group">

                    <div class="list-group-item">
                        <a class="d-flex flex-row" style="color:black;text-decoration: none;" data-toggle="collapse" href="#titanCollapse" role="button" aria-expanded="false" aria-controls="titanCollapse">
                            <h3>Titans</h3>
                            <img style="margin-left:auto; margin-top: 5%; margin-right: 1%;" src="./assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                    <div id="titanCollapse" class="list-group collapse">
                        <a href="#" v-for="titan in titans" v-on:click="addItem(titan)" :key="titan.name" class="list-group-item list-group-item-action">
                            {{ titan.name + " (" + titan.cost + " pts)" }}
                        </a>
                    </div>

                    <div class="list-group-item">
                        <a class="d-flex flex-row" style="color:black;text-decoration: none;" data-toggle="collapse" href="#bannerCollapse" role="button" aria-expanded="false" aria-controls="bannerCollapse">
                            <h3>Banners</h3>
                            <img style="margin-left:auto; margin-top: 5%; margin-right: 1%;" src="./assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                    <div id="bannerCollapse" class="list-group collapse">
                        <a href="#" v-for="banner in banners" v-on:click="addItem(banner)" :key="banner.name" class="list-group-item list-group-item-action">
                            {{ banner.name + " (" + banner.cost + " pts)" }}
                        </a>
                    </div>

                    <div class="list-group-item">
                        <a class="d-flex flex-row" style="color:black;text-decoration: none;" data-toggle="collapse" href="#manipleCollapse" role="button" aria-expanded="false" aria-controls="manipleCollapse">
                            <h3>Maniples</h3>
                            <img style="margin-left:auto; margin-top: 5%; margin-right: 1%;" src="./assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                    <div id="manipleCollapse" class="list-group collapse">
                        <a href="#" v-for="maniple in maniples" v-on:click="addItem(maniple)" :key="maniple.name" class="list-group-item list-group-item-action">
                            {{ maniple.name + " (" + maniple.cost + " pts)" }}
                        </a>
                    </div>

                </div>
            </div>
            <div class="col-md-8">
                <h2>List</h2>
                <div v-for="(item, index) in armyList" :key="item.name" class="card" style="background-color: #f2f2f2;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-10">
                                <h5>{{ item.name + " (" + getTotalTitanCost(item) + " pts)" }}</h5>
                            </div>
                            <div class="col-md-2">
                                <a href="#" v-on:click="moveTopItem(index, item)" data-toggle="tooltip" data-placement="top" title="Move top">
                                    <img src="./assets/chevron-up.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                                <a href="#" v-on:click="moveDownItem(index, item)" data-toggle="tooltip" data-placement="top" title="Move down">
                                    <img src="./assets/chevron-down.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                                <a href="#" v-on:click="cloneItem(index, item)" data-toggle="tooltip" data-placement="top" title="Duplicate">
                                    <img src="./assets/files.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                                <a href="#" v-on:click="removeItem(index, item)" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <img src="./assets/x-circle-fill.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div v-if="isTitan(item)" class="row">
                            <div class="col"><h6 style="text-align: center;">Left Arm</h6></div>
                            <div class="col"><h6 style="text-align: center;">Carapace</h6></div>
                            <div class="col"><h6 style="text-align: center;">Right Arm</h6></div>
                        </div>
                        <div v-if="isTitan(item)" class="row">
                            <div class="col" style="text-align: center;">
                                <div v-if="item.leftArm" >
                                    {{ item.leftArm.name + " (" + item.leftArm.cost + " pts)" }}
                                    <a href="#" v-on:click="removeWeapon(index, 'leftArm')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                                        <img style="margin-top:1.5%;" src="./assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                    </a>
                                </div>
                                <a v-if="!item.leftArm" href="#" v-on:click="openWeaponModal(index, item, 'arm', 'leftArm', 'Left Arm')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                                    <img style="margin-top:1.5%;" src="./assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                            </div>
                            <div class="col" style="text-align: center;">
                                <div v-if="item.carapace">
                                    {{ item.carapace.name + " (" + item.carapace.cost + " pts)" }}
                                    <a href="#" v-on:click="removeWeapon(index, 'carapace')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                                        <img style="margin-top:1.5%;" src="./assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                    </a>
                                </div>
                                <a v-if="!item.carapace" href="#" v-on:click="openWeaponModal(index, item, 'carapace', 'carapace', 'Carapace')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                                    <img style="margin-top:1.5%;" src="./assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                            </div>
                            <div class="col" style="text-align: center;">
                                <div v-if="item.rightArm">
                                    {{ item.rightArm.name + " (" + item.rightArm.cost + " pts)" }}
                                    <a href="#" v-on:click="removeWeapon(index, 'rightArm')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                                        <img style="margin-top:1.5%;" src="./assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                    </a>
                                </div>
                                <a v-if="!item.rightArm" href="#" v-on:click="openWeaponModal(index, item, 'arm', 'rightArm', 'Right Arm')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                                    <img style="margin-top:1.5%;" src="./assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-2">
                <h2 style="text-align: center;">Total {{ total }} pts</h2>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="weaponModal" tabindex="-1" role="dialog" aria-labelledby="weaponModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="weaponModalLabel">{{ weaponModal.title }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="list-group">
                    <a href="#" v-for="weapon in weaponModal.weapons" v-on:click="chooseWeapon(weapon)" :key="weapon.name" class="list-group-item list-group-item-action">
                        {{ weapon.name + " (" + weapon.cost + " pts)" }}
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

const $ = window.$;

import atdata from './data/at-data'

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}

export default {
  name: 'App',
  components: {
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
        removeItem: function (index, item) {
            this.armyList.splice(index, 1);
            this.total -= item.cost;
            tooltipDispose();
        },
        moveTopItem: function (index, item) {
            if(index > 0){
                let topItem = this.armyList[index - 1];
                this.armyList.splice(index - 1, 1, item);
                this.armyList.splice(index, 1, topItem);
                tooltipDispose();
            }
            $('[data-toggle="tooltip"]').tooltip();
        },
        moveDownItem: function (index, item) {
            if(index < this.armyList.length - 1){
                let botItem = this.armyList[index + 1];
                this.armyList.splice(index + 1, 1, item);
                this.armyList.splice(index, 1, botItem);
                tooltipDispose();
            }
            $('[data-toggle="tooltip"]').tooltip();
        },
        cloneItem: function (index, item) {
            this.armyList.splice(index + 1, 0, {...item});
            this.total += item.cost;
            tooltipDispose();
        },
        openWeaponModal: function (index, titan, weaponType, titanWeaponAtt, modalTitle) {
            this.weaponModal.titanIndex = index;
            this.weaponModal.title = modalTitle;
            this.weaponModal.titanWeaponAtt = titanWeaponAtt;

            if(this.weapons[titan.type]){
                this.weaponModal.weapons = {...this.weapons[titan.type][weaponType]};
                $('#weaponModal').modal('toggle');
            }
        },
        chooseWeapon: function (weapon) {
            this.total += weapon.cost;
            this.weaponModal.weapons = [];
            this.weaponModal.title = "";
            let titan = this.armyList[this.weaponModal.titanIndex];
            titan[this.weaponModal.titanWeaponAtt] = weapon;
            this.armyList.splice(this.weaponModal.titanIndex, 1, titan);
            this.weaponModal.titanIndex = -1;
            this.weaponModal.weaponAtt = "";
            $('#weaponModal').modal('toggle');
        },
        getTotalTitanCost: function (titan) {
            let total = titan.cost;
            if(titan.rightArm){
                total += titan.rightArm.cost;
            }
            if(titan.carapace){
                total += titan.carapace.cost;
            }
            if(titan.leftArm){
                total += titan.leftArm.cost;
            }
            return total;
        },
        removeWeapon: function (index, titanWeaponAtt) {
            let titan = this.armyList[index];
            this.total -= titan[titanWeaponAtt].cost;
            titan[titanWeaponAtt] = null;
            this.armyList.splice(index, 1, titan);
            tooltipDispose();
        },
        isTitan: function(item){
            return item.type && ["warlord_sinister", "warlord", "warlord_nemesis", "reaver", "warhound"].includes(item.type);
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
