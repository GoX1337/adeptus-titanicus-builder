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
            titans: titans
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
            }
        },
        updated: function () {
            this.$nextTick(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
          }
    });
}