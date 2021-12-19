<template>
  <div>
    <h8k-navbar v-bind:header="title"></h8k-navbar>
    <Timer :initial="120"/>
  </div>
</template>

<script>
import Timer from "@/components/Timer";
export default {
  components : {
    Timer
  },
  data() {
    return {
      title : 'Timer'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/h8k-design/dist/index.css';
</style>
