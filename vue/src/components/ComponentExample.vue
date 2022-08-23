<template>
  <div class="component-example--container">
    <h2>Component example</h2>
    <h3>{{ componentName }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ComponentExample',
  data() {
    return {
      componentName: 'A h2 title',
    };
  },
};
</script>

<style>
.component-example--container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid tomato;
  border-radius: 6px;
}
</style>
