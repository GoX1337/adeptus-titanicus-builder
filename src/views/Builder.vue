<template>
    <div class="container-fluid" style="margin-top:2%;">
        <div class="row">
            <Menu @chooseItem="addItem"></Menu>
            <ItemList v-bind:name="name" v-bind:armyList="armyList" @openModal="openWeaponModal" @updateTotal="updateTotal"></ItemList>
            <Total v-bind:total="total" v-bind:toSave="toSave" @listSaved="listSaved"></Total>
        </div>
        <Modal v-bind:weaponModal="weaponModal" v-bind:armyList="armyList" @updateTotal="updateTotal"></Modal>
    </div> 
</template>

<script>

import atdata from '@/data/at-data';
import Menu from '@/components/Menu.vue';
import ItemList from '@/components/ItemList.vue';
import Total from '@/components/Total.vue';
import Modal from '@/components/Modal.vue';

const $ = window.$;

import axios from 'axios';

export default {
    name: 'Builder',
    components: {
        Menu, Total, ItemList, Modal
    },
    props: ['battlegroupId'],
    data() {
        return {
            total: 0,
            armyList: [],
            name: "Unnamed battleforce",
            weapons: atdata.weapons,
            titans: atdata.titans,
            banners: atdata.banners,
            maniples: atdata.maniples,
            weaponModal: {
                titanIndex: -1,
                title: "",
                titanWeaponAtt: "",
                weapons: []
            },
            toSave: false
        }
    },
    methods: {
        addItem: function (item) {
            this.armyList.push({...item});
            this.total += item.cost;
        },
        openWeaponModal (index, titan, weaponType, titanWeaponAtt, modalTitle) {
            this.weaponModal.titanIndex = index;
            this.weaponModal.title = modalTitle;
            this.weaponModal.titanWeaponAtt = titanWeaponAtt;
            if(this.weapons[titan.id]){
                this.weaponModal.weapons = {...this.weapons[titan.id][weaponType]};
                $('#weaponModal').modal('toggle');
            }
        },
        updateTotal (value){
            this.total += value;
        },
        listSaved () {
            this.toSave = false;
        }
    },
    watch: {
        armyList: {
            handler() {
                localStorage.setItem('armyList', JSON.stringify(this.armyList));
                this.toSave = true;
            },
            deep: true
        },
        total: {
            handler() {
                localStorage.setItem('total', this.total);
                this.toSave = true;
            },
            deep: true
        },
        name: {
            handler() {
                localStorage.setItem('name', this.name);
                this.toSave = true;
            },
            deep: true
        }
    },
    mounted() {
        if(!this.battlegroupId){
            if (localStorage.getItem('armyList')){
            this.armyList = JSON.parse(localStorage.getItem('armyList'));
            } 
            if (localStorage.getItem('total')){
                this.total = parseInt(localStorage.getItem('total'));
            } 
             if (localStorage.getItem('name')){
                this.name = localStorage.getItem('name');
            } 
            return;
        }

        axios
            .get('/api/battlegroup/' + this.battlegroupId,  {
              withCredentials: true
            })
            .then(response => {
                if(response.data){
                    this.armyList = response.data.list;
                    this.total = response.data.total;
                    this.name = response.data.name;
                    this.toSave = false;
                }
            })
            .catch(err => { console.error(err)});
    },
    updated: function () {
        this.$nextTick(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
}
</script>
