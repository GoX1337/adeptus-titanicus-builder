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
            weaponModal: {
                titanIndex: -1,
                title: "",
                titanWeaponAtt: "",
                weapons: []
            }
        },
        methods: {
            addTitan: function (titan) {
                this.armyList.push(titan);
                this.total += titan.cost;
            },
            removeTitan: function (index, titan) {
                this.armyList.splice(index, 1);
                this.total -= titan.cost;
                tooltipDispose();
            },
            moveTopTitan: function (index, titan) {
                if(index > 0){
                    let topTitan = this.armyList[index - 1];
                    this.armyList.splice(index - 1, 1, titan);
                    this.armyList.splice(index, 1, topTitan);
                    tooltipDispose();
                }
                $('[data-toggle="tooltip"]').tooltip();
            },
            moveDownTitan: function (index, titan) {
                if(index < this.armyList.length - 1){
                    let botTitan = this.armyList[index + 1];
                    this.armyList.splice(index + 1, 1, titan);
                    this.armyList.splice(index, 1, botTitan);
                    tooltipDispose();
                }
                $('[data-toggle="tooltip"]').tooltip();
            },
            cloneTitan: function (index, titan) {
                this.armyList.splice(index + 1, 0, titan);
                this.total += titan.cost;
                tooltipDispose();
            },
            openWeaponModal: function (index, titan, weaponType, titanWeaponAtt, modalTitle) {
                this.weaponModal.titanIndex = index;
                this.weaponModal.title = modalTitle;
                this.weaponModal.titanWeaponAtt = titanWeaponAtt;

                if(this.weapons[titan.type]){
                    this.weaponModal.weapons = this.weapons[titan.type][weaponType];
                    $('#weaponModal').modal('toggle');
                }
            },
            chooseWeapon: function (weapon) {
                this.weaponModal.weapons = [];
                this.weaponModal.title = "";
                let titan = this.armyList[this.weaponModal.titanIndex];
                titan[this.weaponModal.titanWeaponAtt] = weapon;

                console.log(titan);

                this.armyList.splice(this.weaponModal.titanIndex, 1, titan);
                this.weaponModal.titanIndex = -1;
                this.weaponModal.weaponAtt = "";
                $('#weaponModal').modal('toggle');
            }
        },
        updated: function () {
            this.$nextTick(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
          }
    });
}