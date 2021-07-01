<template>
  <nav>
    <ul class="navigation-list">
      <li class="navigation-item"><a href="#">Dashboard</a></li>
      <li class="navigation-item"><a href="#">Messages</a></li>
      <li class="navigation-item active"><a href="#">Orders</a></li>
      <li class="navigation-item"><a href="#">Gigs</a></li>
      <li class="navigation-item"><a href="#">Analytics</a></li>
      <li class="navigation-item"><a href="#">Earnings</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
});
</script>

<style scoped>
.navigation-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.navigation-item a {
  text-decoration: none;
  color: #97989f;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 22px;
}
.active a {
  color: #5bbe75 !important;
  border-bottom: 3px solid #5bbe75;
}
</style>
