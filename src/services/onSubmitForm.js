import Notiflix from 'notiflix';
import { postOrder } from 'requests/axiosOrderPage';
const error = 'Something went wrong...';
export const onSubmit = (
  values,
  actions,
  localCart,
  giveTotalPrice,
  setIsLoading
) => {
  const totalPrice = giveTotalPrice(localCart);
  const idShop = localCart[0]._id;
  const nameShop = localCart[0].nameShop;
  const order = localCart.map(el => {
    const updateOrder = {
      product: el.nameFood,
      amount: el.count,
      price: el.price,
    };
    return updateOrder;
  });
  const newOrder = {
    ...values,
    totalPrice,
    idShop,
    nameShop,
    order,
  };

  setIsLoading(true);
  postOrder(newOrder)
    .then(() => {
      actions.resetForm();
      Notiflix.Notify.success('Your order is accepted');
    })
    .catch(() => {
      Notiflix.Notify.failure(error);
    })
    .finally(() => setIsLoading(false));
};
