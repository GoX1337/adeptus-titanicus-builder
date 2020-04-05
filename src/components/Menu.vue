<template>
    <div class="col-sm-2">
        <div class="list-group">
            <div class="list-group-item">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#titanCollapse" role="button" aria-expanded="false" aria-controls="titanCollapse">
                    <h3>Titans</h3>
                    <img src="../assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
                </a>
            </div>
            <div id="titanCollapse" class="list-group collapse">
                <a href="#" v-for="titan in titans" v-on:click="addItem(titan)" :key="titan.name" class="list-group-item list-group-item-action">
                    {{ titan.name + " (" + titan.cost + " pts)" }}
                </a>
            </div>

            <div class="list-group-item">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#bannerCollapse" role="button" aria-expanded="false" aria-controls="bannerCollapse">
                    <h3>Banners</h3>
                    <img src="../assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
                </a>
            </div>
            <div id="bannerCollapse" class="list-group collapse">
                <a href="#" v-for="banner in banners" v-on:click="addItem(banner)" :key="banner.name" class="list-group-item list-group-item-action">
                    {{ banner.name + " (" + banner.cost + " pts)" }}
                </a>
            </div>

            <div class="list-group-item">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#manipleCollapse" role="button" aria-expanded="false" aria-controls="manipleCollapse">
                    <h3>Maniples</h3>
                    <img src="../assets/chevron-right.svg" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
                </a>
            </div>
            <div id="manipleCollapse" class="list-group collapse">
                <a href="#" v-for="maniple in maniples" v-on:click="addItem(maniple)" :key="maniple.name" class="list-group-item list-group-item-action">
                    {{ maniple.name + " (" + maniple.cost + " pts)" }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import atdata from '../data/at-data'

export default {
  name: 'Menu',
  data() {
    return {
        weapons: atdata.weapons,
        titans: atdata.titans,
        banners: atdata.banners,
        maniples: atdata.maniples
    }
  },
  methods: {
      addItem(item){
          this.$emit('chooseItem', item);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chevron {
        margin-left: auto;
        margin-top: 5%; 
        margin-right: 1%;
    }
    .link-menu {
        color:black;
        text-decoration: none;
    }
</style>
