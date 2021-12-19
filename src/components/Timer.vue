<template>
  <div class="mt-100 layout-column align-items-center justify-content-center">
    <div class="timer-value" data-testid="timer-value">{{initialValue}}</div>
    <button class="large"
            data-testid="stop-button" @click="handleStopTimer()">
      Stop Timer
    </button>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props:['initial'],
  data() {
    return {
      initialValue: this.initial,
      timer: null
    }
  },
  methods: {
    startTimer(){
      if(this.initialValue > 0){
        this.initialValue = this.initialValue -1;
        console.log("j")
      }
    },
    handleStopTimer(){
      clearInterval(this.timer)
    },
  },
  mounted(){
    this.timer= setInterval(this.startTimer, 1000)
  },
}
</script>

<style scoped>
.timer-value {
  font-size: 2em;
  color: var(--heading-color);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
