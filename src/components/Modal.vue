<template>
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
</template>

<script>

const $ = window.$;

export default {
  name: 'Modal',
  props: ['weaponModal', 'armyList'],
  methods: {
    chooseWeapon (weapon) {
        this.weaponModal.weapons = [];
        this.weaponModal.title = "";
        let titan = this.armyList[this.weaponModal.titanIndex];
        titan[this.weaponModal.titanWeaponAtt] = weapon;
        this.armyList.splice(this.weaponModal.titanIndex, 1, titan);
        this.weaponModal.titanIndex = -1;
        this.weaponModal.weaponAtt = "";
        this.$emit('updateTotal', weapon.cost);
        $('#weaponModal').modal('toggle');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
