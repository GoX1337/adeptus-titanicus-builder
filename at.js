window.onload = () => {
    loadVueApp();
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
            }
        }
    });
}