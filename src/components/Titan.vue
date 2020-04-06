<template>
    <div>
        <div class="row">
            <div class="col"><h6 style="text-align: center;">Left Arm</h6></div>
            <div class="col"><h6 v-if="hasCarapaceSlot(item)" style="text-align: center;">Carapace</h6></div>
            <div class="col"><h6 style="text-align: center;">Right Arm</h6></div>
        </div>
        <div class="row">
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
                <div v-if="hasCarapaceSlot(item) && item.carapace">
                    {{ item.carapace.name + " (" + item.carapace.cost + " pts)" }}
                    <a href="#" v-on:click="removeWeapon(index, 'carapace')" data-toggle="tooltip" data-placement="top" title="Remove weapon">
                        <img style="margin-top:1.5%;" src="../assets/x-circle.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
                    </a>
                </div>
                <a v-if="hasCarapaceSlot(item) && !item.carapace" href="#" v-on:click="openWeaponModal(index, item, 'carapace', 'carapace', 'Carapace')" data-toggle="tooltip" data-placement="top" title="Add weapon">
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
</template>

<script>

export default {
    name: 'Titan',
    props: ['item', 'index'],
    methods: {
        hasCarapaceSlot (item){
            return Object.prototype.hasOwnProperty.call(item, 'carapace'); 
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
