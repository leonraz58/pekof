<script setup lang="ts"></script>

<template>
  <header class="the-header">header</header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
$bgColor: #cac;

.the-header {
  background-color: $bgColor;
}
</style>
