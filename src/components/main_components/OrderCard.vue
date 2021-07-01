<template>
  <div class="card">
    <div class="cart-manu">
      <span v-on:click="() => deleteOrder(order.id)" class="delete-btn">
        . . .
      </span>
    </div>
    <div class="card-body">
      <OrderImage />
      <OrderDescription
        :order_type="order.type"
        :time="order.time"
        :price="order.price"
      />
    </div>
    <hr class="brake-line" />
    <div class="card-footer">
      <div class="card-footer-text">
        View Order
      </div>
      <div class="account-img"><div></div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderImage from './OrderImage.vue';
import OrderDescription from './OrderDescription.vue';

export default defineComponent({
  name: 'OrderCard',
  components: {
    OrderImage,
    OrderDescription,
  },
  props: {
    order: {
      type: Object,
    },
  },
  methods: {
    // insted of propagating event use state management like vuex
    deleteOrder(id: number) {
      this.$emit('delete_order', id);
    },
  },
});
</script>

<style scoped>
.card {
  background-color: #fff;
  min-height: 150px;
  border-radius: 6px;
  margin-bottom: 15px;
}
.cart-manu {
  position: relative;
  margin: 0 5% 0 5%;
  height: 45px;
  /* background-color: red; */
}
.delete-btn {
  position: absolute;
  right: 0px;
  top: 12px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
}
.delete-btn:hover {
  cursor: pointer;
  color: red;
}
.card-body {
  display: flex;
  flex-direction: row;
  margin: 0 5% 0 5%;
}
.brake-line {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 0;
  margin: 0;
}
.card-footer {
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: row;
  margin: 0 5% 0 5%;
  height: 50px;
  align-items: center;
}
.card-footer-text {
  min-width: 70%;
  color: rgba(0, 0, 0, 0.7);
}
.account-img {
  width: 100%;
  position: relative;
  background-color: green;
}
.account-img div {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #cebfcb;
  border-radius: 50%;
  right: 0;
  top: -13px;
}
</style>
