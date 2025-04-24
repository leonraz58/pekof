<script setup lang="ts"></script>

<template><span class="loader"></span></template>

<style scoped lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--primary-500);
  border-bottom-color: var(--primary-900);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
