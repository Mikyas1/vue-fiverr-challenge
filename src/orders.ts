type Order = {
  id: number;
  type: string;
  time: string;
  price: number;
};

const orders: Order[] = [
  {
    id: 1,
    type: 'new_order',
    time: '5 days left',
    price: 320,
  },
  {
    id: 2,
    type: 'new_order',
    time: '3 days left',
    price: 85,
  },
  {
    id: 3,
    type: 'in_progress',
    time: 'Due in 2 days, 5hrs',
    price: 155,
  },
  {
    id: 4,
    type: 'in_progress',
    time: 'Due in 3 days, 2hrs',
    price: 385,
  },
  {
    id: 5,
    type: 'waiting_for_buyer',
    time: '3 days left',
    price: 385,
  },
  {
    id: 6,
    type: 'completed',
    time: 'Dec 12, 9:43PM',
    price: 346,
  },
  {
    id: 7,
    type: 'completed',
    time: 'Dec 13, 8:21PM',
    price: 320,
  },
  {
    id: 8,
    type: 'completed',
    time: 'Dec 12, 9:43PM',
    price: 385,
  },
];

export default orders;
export { Order };
