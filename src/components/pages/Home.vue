<template>
    <div>
      my-page
    </div>
</template>

<script>
import router from '../../router'
export default {
  name: 'Home',
  mounted () {
    this.checkLoggedIn()
  },
  methods: {
    checkLoggedIn () {
      if (!this.$request.defaults.headers.common['Authorization']) {
        router.push('/auth')
      }
    }
  }
}
</script>