<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
}

.container-lg {
  max-width: 1040px;
}
.container-lg {
  margin: 0 auto;
}
</style>
