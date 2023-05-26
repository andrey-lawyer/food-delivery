import axios from 'axios';

export async function postOrder(newOrder) {
  const { data } = await axios.post('/orders', newOrder);
  console.log(data);
  return data;
}
