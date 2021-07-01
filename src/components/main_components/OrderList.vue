<template>
  <div class="order-item">
    <h4 class="order-title">{{ title }}</h4>
    <div v-for="order in orders" :key="order.id">
      <OrderCard :order="order" @delete_order="delete_order" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderCard from './OrderCard.vue';

export default defineComponent({
  name: 'OrderList',
  components: {
    OrderCard,
  },
  props: {
    title: {
      type: String,
    },
    orders: {
      type: [],
    },
  },
  methods: {
    // insted of propagating event use state management like vuex
    delete_order(id: number) {
      this.$emit('delete_order', id);
    },
  },
});
</script>

<style scoped>
.order-item {
  background-color: #f4f6f8;
  width: 25%;
  margin: 0 2% 0 0;
  border-radius: 6px;
  margin-bottom: 45px;
  min-height: 500px;
  padding: 0 1% 0 1%;
}
.order-title {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  font-size: 13px;
}
</style>
