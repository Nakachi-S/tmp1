<template>
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    animation = 'lift'
    @push-page="pushPage"
    @pop-page="popPage"
  ></v-ons-navigator>
</template>

<script>
/* eslint-disable */
import Qr from './Qr';

export default {
  data() {
    return {
      pageStack: [this.list]
    };
  },
  props: ['list'],
  methods: {
    popPage() {
      this.pageStack.pop();
      this.$emit('backButton', this.pageStack);
    },
    pushPage(e) {
      if (e.page === 'Qr') e.page = Qr;
      this.pageStack.push({
        extends: e.page,
        data: () =>  e.data || {}
      });
      this.$emit('backButton', this.pageStack);
    }
  }
}
</script>