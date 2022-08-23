<script setup>
import ComponentExample from './ComponentExample.vue';
defineProps({
  msg: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="helloWorld-container">
    <h1 class="vueColor">{{ msg }}</h1>
    <p class="frontend-team">{{ team }}</p>
    <div class="helloWorldComponentExample-container">
      <p>Component example in HelloWorld:</p>
      <ComponentExample></ComponentExample>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 40px;
}

.helloWorld-container h1 {
  text-align: center;
}

.frontend-team {
  color: tomato;
  font-weight: bold;
  text-align: center;
}

.helloWorldComponentExample-container {
  display: flex;
  flex-direction: column;
  width: 30vw;
}
</style>
