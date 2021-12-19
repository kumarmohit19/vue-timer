<template>
  <div class="mt-100 layout-column align-items-center justify-content-center">
    <div class="timer-value" data-testid="timer-value"></div>
    <button class="large"
            data-testid="stop-button">
      Stop Timer
    </button>
  </div>
</template>

<script>
export default {
  name: "Timer",
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
