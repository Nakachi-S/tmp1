<template>
  <v-ons-page>
    ようこそ！！！
    <v-ons-fab
      position="bottom center"
      :visible="true"
      :ripple="true"
      @click = "pushPage"
    >
      <v-ons-icon icon="camera"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>

<script>
/* eslint-disable */
import Qr from '../pages/Qr'
export default {
  name: "Home",
  key: "HomeMaster",
  data () {
    return {
    }
  },
  methods: {
    pushPage(e) {
      this.$emit('push-page', {page: Qr});
      // console.log('hello')
    },
  },
}
</script>
<style>

</style>