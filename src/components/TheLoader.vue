<template>
  <div class="the-loader the-loader__container">
    <span class="the-loader__elem"></span>
  </div>
</template>

<style lang="scss">
.the-loader {
  &__elem {
    width: 48px;
    height: 48px;
    border: 5px solid var(--primary-500);
    border-bottom-color: var(--primary-900);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: var(--main-height);
  }
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
