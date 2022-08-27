<template>
  <transition name="fade">
    <LoadingPage v-if="isLoading"></LoadingPage>
  </transition>
</template>

<script>
import LoadingPage from './LoadingPage'
import {setTimeout} from "timers";

export default {
  name: "Common",
  components: {LoadingPage},
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.handleLoading()

  },
  methods: {
    handleLoading () {
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  },
  watch: {

  }
}
</script>

<style lang="stylus" scoped>

</style>