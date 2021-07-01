<template>
  <div class="app">
    <div class="main">
      <Header />
      <Main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Main,
  },
});
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.app {
  background-color: #bdd4f1;
  min-height: 100vh;
  padding: 5%;
  padding-top: 2%;
}
.main {
  background-color: #fafcfe;
  min-height: 100%;
  width: 100%;
  border-radius: 11px;
}
</style>
