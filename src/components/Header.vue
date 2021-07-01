<template>
  <nav>
    <ul class="header-list">
      <li>
        <div class="logo">
          fiverr
        </div>
      </li>
      <li class="navigation">
        <Navigation />
      </li>
      <li class="account-img">
        <div></div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './header_components/Navigation.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Navigation,
  },
});
</script>

<style scoped>
nav {
  background-color: #fff;
  height: 65px;
  padding-left: 4%;
  padding-right: 4%;
  border-radius: 11px;
}
.header-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  color: #63646a;
  font-size: 2em;
  font-weight: bolder;
}
.account-img {
  width: 100%;
  position: relative;
}
.account-img div {
  height: 30px;
  width: 30px;
  background-color: #484848;
  border-radius: 50%;
  margin-left: 93%;
  right: 0;
}
</style>
