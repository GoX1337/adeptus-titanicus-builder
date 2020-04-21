<template>
    <div class="col-sm-2">
        <div class="list-group">
            <div class="list-group-item" @click="openMenu('titan')">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#titanCollapse" role="button" aria-expanded="false" aria-controls="titanCollapse">
                    <h3>Titans</h3>
                    <img :src="titanChevronImage" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
                </a>
            </div>
            <div id="titanCollapse" class="list-group collapse">
                <a href="#" v-for="titan in titans" v-on:click="addItem(titan)" :key="titan.name" class="list-group-item list-group-item-action">
                    {{ titan.name + " (" + titan.cost + " pts)" }}
                </a>
            </div>

            <div class="list-group-item" @click="openMenu('banner')">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#bannerCollapse" role="button" aria-expanded="false" aria-controls="bannerCollapse">
                    <h3>Banners</h3>
                    <img :src="bannerChevronImage" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
                </a>
            </div>
            <div id="bannerCollapse" class="list-group collapse">
                <a href="#" v-for="banner in banners" v-on:click="addItem(banner)" :key="banner.name" class="list-group-item list-group-item-action">
                    {{ banner.name + " (" + banner.cost + " pts)" }}
                </a>
            </div>

            <div class="list-group-item" @click="openMenu('maniple')">
                <a class="d-flex flex-row link-menu" data-toggle="collapse" href="#manipleCollapse" role="button" aria-expanded="false" aria-controls="manipleCollapse">
                    <h3>Maniples</h3>
                    <img :src="manipleChevronImage" width="15" height="15" class="d-inline-block align-top chevron" alt=""/>
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

//const $ = window.$;

export default {
  name: 'Menu',
  data() {
    return {
        weapons: atdata.weapons,
        titans: atdata.titans,
        banners: atdata.banners,
        maniples: atdata.maniples,
        titanChevronImage: require("../assets/chevron-right.svg"),
        bannerChevronImage: require("../assets/chevron-right.svg"),
        manipleChevronImage: require("../assets/chevron-right.svg"),
        titanMenu: false,
        bannerMenu: false,
        manipleMenu: false,
    }
  },
  methods: {
      addItem(item){
          this.$emit('chooseItem', item);
      },
      openMenu(menu){
        if(menu == "titan"){
            this.titanMenu = !this.titanMenu;
            this.titanChevronImage = this.titanMenu ? require("../assets/chevron-down.svg") : require("../assets/chevron-right.svg");
        } else if(menu == "banner"){
            this.bannerMenu = !this.bannerMenu;
            this.bannerChevronImage = this.bannerMenu ? require("../assets/chevron-down.svg") : require("../assets/chevron-right.svg");
        } else if(menu == "maniple"){
            this.manipleMenu = !this.manipleMenu;
            this.manipleChevronImage = this.manipleMenu ? require("../assets/chevron-down.svg") : require("../assets/chevron-right.svg");
        }
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
