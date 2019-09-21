<template>
    <router-view></router-view>
</template>

<script>
import {mapActions} from 'vuex'  // 追加

export default {
  name: 'App',
  created () {  // イベント登録
    this.tryLoggedIn()
  },
  methods: {
    ...mapActions(['login', 'logout', 'tryLoggedIn'])  // 'tryLoggedIn' 追加
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
