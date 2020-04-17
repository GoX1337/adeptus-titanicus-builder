<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><img src="./assets/at.png" width="30" height="30" class="d-inline-block align-top" alt />Adeptus Titanicus</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/builder">Builder</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/battlegroups">Battlegroups</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <form class="form-inline">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <h5 v-if="user && user.displayName" class="name">{{user.displayName}}</h5>
            </li>
            <li v-if="!user || !user.displayName" class="nav-item">
              <a class="nav-link" href="#" v-on:click="loginOpenModal">Login</a>
            </li>
            <li v-if="user && user.displayName" class="nav-item">
              <a class="nav-link" href="http://localhost:8080/logout">Logout</a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
    <router-view />
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                      <a style="margin-left: 40%;" href="http://localhost:8080/auth/google" data-toggle="tooltip" data-placement="top" title="Login using Google">
                        <img src="./assets/google.png" width="100" height="100" class="d-inline-block align-top" alt=""/>
                      </a>
                  </div>
                  <div class="row" style="margin-top: 5%; margin-bottom: 5%;">
                     <a style="margin-left: 40%;" href="http://localhost:8080/auth/facebook" data-toggle="tooltip" data-placement="top" title="Login using Facebook">
                        <img src="./assets/fb.png" width="100" height="100" class="d-inline-block align-top" alt=""/>
                     </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

const $ = window.$;
import axios from 'axios';

export default {
    name: 'App',
    data(){
      return {
        user: null
      }
    },
    methods : {
      loginOpenModal () {
        $('#loginModal').modal('toggle');
      }
    },
    mounted () {
      axios
        .get('/profile', { withCredentials: true })
        .then(response => {
          console.log("/profile", response.data.displayName);
          this.user = response.data;
        })
        .catch(err => { console.error(err)});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.name {
  color: white; 
  font-size: 1.25rem; 
  font-weight: 400; 
  padding-top: .3125rem; 
  padding-bottom: .3125rem;
}

</style>
