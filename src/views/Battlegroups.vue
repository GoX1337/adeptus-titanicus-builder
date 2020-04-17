<template>
  <div class="container-fluid" style="margin-top:2%;">
    <h1>Battlegroups</h1>
    <div class="row">
    <div class="col-sm-6">
      <h3>My battlegroups</h3>
      <table class="table table-hover table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Creation date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(battlegroup, index) in battlegroups" :key="battlegroup.name + index">
            <th scope="row">{{ index + 1 }}</th>
            <td><a :href="'/builder/' + battlegroup._id" >{{ battlegroup.name }}</a></td>
            <td>{{ battlegroup.total }}</td>
            <td>{{ battlegroup.createdAt }}</td>
            <td>
              <a href="#" v-on:click="deleteBattlegroup(index, battlegroup)" data-toggle="tooltip" data-placement="top" title="Delete">
                  <img src="../assets/trash-fill.svg" width="15" height="15" class="d-inline-block align-top" alt=""/>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
     </div> 
     <div class="col-sm-6">
      <h3>Public battlegroups</h3>
      <table class="table table-hover table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Creation date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(battlegroup, index) in othersBattlegroups" :key="battlegroup.name + index">
            <th scope="row">{{ index + 1 }}</th>
            <td><a :href="'/builder/' + battlegroup._id" >{{ battlegroup.name }}</a></td>
            <td>{{ battlegroup.total }}</td>
            <td>{{ battlegroup.createdAt }}</td>
          </tr>
        </tbody>
      </table>
     </div>
     </div>
  </div> 
</template>

<script>

import axios from 'axios';

const $ = window.$;

let tooltipDispose = () => {
    $('[data-toggle="tooltip"]').tooltip('dispose');
}
export default {
    name: 'Battlegroups',
    data(){
      return {
        battlegroups: [],
        othersBattlegroups: []
      }
    },
    methods: {
      deleteBattlegroup(index, battlegroup) {
        axios
          .delete('/api/battlegroup/' + battlegroup._id, { withCredentials: true })
          .then(() => {
            this.battlegroups.splice(index, 1);
            tooltipDispose();
          })
          .catch(err => { console.error(err)});
      }
    },
    mounted () {
      axios
        .get('/api/battlegroup', { withCredentials: true })
        .then(response => {
            this.othersBattlegroups = response.data;
          })
          .catch(err => { console.error(err)});

      axios
        .get('/api/battlegroup',  {
              withCredentials: true,
              params: { sessionUser: true}
            })
            .then(response => {
              this.battlegroups = response.data;
            })
            .catch(err => { console.error(err)});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total {
    text-align: center;
}
</style>
