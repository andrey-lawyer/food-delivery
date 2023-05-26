import axios from 'axios';

export async function getOrdersUser(email) {
  const { data } = await axios.get(`/orders/${email}`);
  return data;
}
