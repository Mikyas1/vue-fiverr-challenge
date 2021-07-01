<template>
  <div class="card-img"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderImage',
});
</script>

<style scoped>
.card-img {
  height: 75px;
  min-width: 75px;
  background-color: #e8e8e8;
  border-radius: 8px;
}
</style>
