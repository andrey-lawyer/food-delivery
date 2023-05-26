import Notiflix from 'notiflix';

const { useEffect, useState } = require('react');
const { getShops, getFoodsOneShop } = require('requests/axiosShopPage');

const idFirstShop = '646e5dd6e09d5e3288ca288e';
const error = 'Something went wrong...';

export const useShop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [idShop, setIdShop] = useState('');
  const [shops, setShops] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getShops()
      .then(data => {
        setShops(data);
      })
      .catch(() => {
        Notiflix.Notify.failure(error);
      })
      .finally(() => setIsLoading(false));
    getFoodsOneShop(idFirstShop)
      .then(data => {
        setFoods(data);
      })
      .catch(() => {
        setIsLoading(true);
        Notiflix.Notify.failure(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getFoodsOneShop(idShop)
      .then(data => {
        setFoods(data);
      })
      .catch(() => {
        Notiflix.Notify.failure(error);
      })
      .finally(() => setIsLoading(false));
  }, [idShop]);
  return { isLoading, setIdShop, shops, foods };
};
