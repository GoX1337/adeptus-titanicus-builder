<template>
    <div class="col-md-8">
        <h2>List</h2>
        <div v-for="(item, index) in armyList" :key="item.name + index" class="card" style="background-color: #f2f2f2;">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-10">
                        <h5>{{ item.name + " (" + getTotalTitanCost(item) + " pts)" }}</h5>
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
                                <img style="margin-top:1.5%;" src="../assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                            </a>
                        </div>
                        <a v-if="!item.leftArm" href="#" v-on:click="openWeaponModal(index, item, 'arm', 'leftArm', 'Left Arm')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                            <img style="margin-top:1.5%;" src="../assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                    <div class="col" style="text-align: center;">
                        <div v-if="item.carapace">
                            {{ item.carapace.name + " (" + item.carapace.cost + " pts)" }}
                            <a href="#" v-on:click="removeWeapon(index, 'carapace')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                                <img style="margin-top:1.5%;" src="../assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                            </a>
                        </div>
                        <a v-if="!item.carapace" href="#" v-on:click="openWeaponModal(index, item, 'carapace', 'carapace', 'Carapace')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                            <img style="margin-top:1.5%;" src="../assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                    <div class="col" style="text-align: center;">
                        <div v-if="item.rightArm">
                            {{ item.rightArm.name + " (" + item.rightArm.cost + " pts)" }}
                            <a href="#" v-on:click="removeWeapon(index, 'rightArm')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                                <img style="margin-top:1.5%;" src="../assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                            </a>
                        </div>
                        <a v-if="!item.rightArm" href="#" v-on:click="openWeaponModal(index, item, 'arm', 'rightArm', 'Right Arm')" data-toggle="tooltip" data-placement="top" title="Add weapon">
                            <img style="margin-top:1.5%;" src="../assets/plus.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const $ = window.$;

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}

export default {
    name: 'List',
    props: ['armyList'],
    methods: {
        removeItem( index, item) {
            this.armyList.splice(index, 1);
            this.total -= item.cost;
            this.$emit('updateTotal', -item.cost);
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
        cloneItem (index, item) {
            this.armyList.splice(index + 1, 0, {...item});
            this.total += item.cost;
            this.$emit('updateTotal', item.cost);
            tooltipDispose();
        },
        getTotalTitanCost (titan) {
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
        isTitan (item){
            return item.type && ["warlord_sinister", "warlord", "warlord_nemesis", "reaver", "warhound"].includes(item.type);
        },
        openWeaponModal (index, titan, weaponType, titanWeaponAtt, modalTitle) {
            this.$emit('openModal', {
                index,
                titan,
                weaponType,
                titanWeaponAtt,
                modalTitle
            });
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
