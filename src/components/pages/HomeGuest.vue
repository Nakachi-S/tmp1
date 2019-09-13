<template>
  <v-ons-page>
    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
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
  template: '#main',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          // icon: this.md() ? null : 'ion-home',
          icon: 'ion-home',
          label: 'Home',
          page: Home,
        },
        {
          // icon: this.md() ? null : 'ion-ios-bell',
          icon: 'ion-ios-bell',
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