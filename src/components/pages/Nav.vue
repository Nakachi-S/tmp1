<template>
  <v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)">
  </v-ons-navigator>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Nav',
  data() {
    return {
      pageStack: [test1]
    }
  }
}
</script>