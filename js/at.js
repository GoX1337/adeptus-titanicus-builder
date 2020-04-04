window.onload = () => {
    loadVueApp();
}

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}

let loadVueApp = () => {

    let app = new Vue({
        el: '#app',
        data: {
            total: 0,
            armyList: [],
            weapons: weapons,
            titans: titans,
            banners: banners,
            maniples: maniples,
            weaponModal: {
                titanIndex: -1,
                title: "",
                titanWeaponAtt: "",
                weapons: []
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
    });

}