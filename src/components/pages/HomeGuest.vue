<template>
  <v-ons-page class="tmp" app>
    <v-ons-toolbar>
      <div class="center">Smart-Inn</div>
      <!--<div class="right">
        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
      </div>-->
    </v-ons-toolbar>
    <v-ons-tabbar swipeable:="false" position="bottom"
      :tabs="tabs"
      :visible="true"
      :index.sync="tabbarIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>


<script>
/* eslint-disable */
import Home from '../parts/Home'
import Map from '../parts/Map'

export default {
  name: 'HomeGuest',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: 'home',
          label: 'Home',
          page: Home,
        },
        {
          icon: 'map',
          label: 'Map',
          page: Map,
        },
      ]
    };
  },
  components: {Home, Map},
  mounted () {
    this.checkLoggedIn()
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    checkLoggedIn () {
      if (!this.$request.defaults.headers.common['Authorization']) {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
};
</script>
<style>
.tmp{
  height:100%;
}
</style>