<template>
  <div class="card-description">
    <p>
      <span
        class="order-type"
        :style="`background: ${get_order_type(order_type).color}`"
      >
        {{ get_order_type(order_type).val }}
      </span>
      <br />
      <span class="order-time">{{ time }}</span>
      <br />
      <span class="order-price">${{ price }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderCard',
  props: {
    order_type: {
      type: String,
    },
    time: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  components: {},
  methods: {
    get_order_type(order_type: string): { val: string; color: string } {
      switch (order_type) {
        case 'new_order':
          return {
            val: 'NEW ORDER',
            color: '#ffecd0',
          };
        case 'in_progress':
          return {
            val: 'IN PROGRESS',
            color: '#D3DFFB',
          };
        case 'waiting_for_buyer':
          return {
            val: 'WAITING FOR BUYER',
            color: '#F8D7EB',
          };
        case 'completed':
          return {
            val: 'COMPLETED',
            color: '#CAF4E1',
          };
        default:
          return {
            val: '',
            color: '',
          };
      }
    },
  },
});
</script>

<style scoped>
.card-description {
  width: 100%;
  height: 100px;
  color: rgba(0, 0, 0, 0.8);
}
.order-type {
  /* background-color: #ffecd0; */
  display: inline;
  float: right;
  padding: 5px 10px 5px 10px;
  font-size: 0.6em;
  font-weight: bold;
  border-radius: 10px;
}
p {
  position: relative;
  margin: 0;
}
.order-time {
  position: absolute;
  font-size: 0.75em;
  color: #828488;
  font-weight: bold;
  padding: 13px 0 13px 0;
  right: 0;
}
.order-price {
  position: absolute;
  font-size: 1em;
  color: #424246;
  font-weight: bold;
  padding: 17px 0 10px 0;
  right: 0;
}
</style>
