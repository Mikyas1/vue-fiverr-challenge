<template>
  <div class="orders-list">
    <!-- loop through order list instade of hard coding -->
    <OrderList
      @delete_order="delete_order"
      title="NEW ORDERS"
      :orders="get_orders('new_order')"
    />
    <OrderList
      @delete_order="delete_order"
      title="IN PROGRESS"
      :orders="get_orders('in_progress')"
    />
    <OrderList
      @delete_order="delete_order"
      title="WAITING FOR BUYER"
      :orders="get_orders('waiting_for_buyer')"
    />
    <OrderList
      @delete_order="delete_order"
      title="COMPLETED"
      :orders="get_orders('completed')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderList from './main_components/OrderList.vue';
import orders, { Order } from '../orders';

export default defineComponent({
  name: 'Main',
  data(): { local_orders: Order[] } {
    return {
      local_orders: [],
    };
  },
  components: {
    OrderList,
  },
  methods: {
    get_orders(val: string): Order[] {
      return this.local_orders.filter((o) => o.type == val);
    },
    delete_order(id: number) {
      this.local_orders = this.local_orders.filter((o) => o.id != id);
    },
  },
  created() {
    this.local_orders = orders;
  },
});
</script>

<style scoped>
.orders-list {
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-left: 4%;
  padding-right: 4%;
}

.orders-list > :first-child {
  margin-left: 0;
}
.orders-list > :last-child {
  margin-right: 0;
}
</style>
