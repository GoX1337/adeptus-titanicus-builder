<template>
    <div class="col-sm-2 total">
        <h2 style="">Total {{ total }} pts</h2>
        <a v-if="toSave" href="#" v-on:click="saveBattlegroup()" data-toggle="tooltip" data-placement="top" title="Save battlegroup">
            <img src="../assets/download.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> 
        </a>
    </div>
</template>

<script>

import axios from 'axios';

const $ = window.$;

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}

export default {
    name: 'Total',
    props: ['total', 'toSave'],
    methods: {
        saveBattlegroup() {
            axios.post('http://localhost:8080/battlegroup', 
            {
                name: 'gox-Battleforce',
                list: JSON.parse(localStorage.getItem('armyList')),
                total: localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0
            }, 
            {
                withCredentials: true
            })
            .then(() => {
                this.$emit('listSaved', true);
                tooltipDispose();
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total {
    text-align: center;
}
</style>
