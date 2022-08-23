<script setup>
import HelloWorldVue from './components/HelloWorldVue.vue';
import ComponentExampleVue from './components/ComponentExample.vue';
</script>

<template>
  <div class="wrapper">
    <HelloWorldVue msg="A hello world Vue App" team="By Frontend team" />
    <div class="appComponentExample-container">
      <p>Component example in App:</p>
      <ComponentExampleVue />
    </div>
  </div>
</template>

<style>
#app {
  padding: 50px;
}
.vueColor {
  text-decoration: none;
  color: #43d392;
}
.appComponentExample-container {
  display: flex;
  flex-direction: column;
  width: 20vw;
}
</style>
