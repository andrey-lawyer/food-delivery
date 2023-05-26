import axios from 'axios';

axios.defaults.baseURL = 'https://fastfood-orders.onrender.com/api/';

export async function getShops() {
  const { data } = await axios.get(`/shops`);
  return data;
}

export async function getFoodsOneShop(idShop) {
  const { data } = await axios.get(`/foods/${idShop}`);
  return data;
}
