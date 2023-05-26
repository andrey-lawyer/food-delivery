import Notiflix from 'notiflix';
import { getOrdersUser } from 'requests/axiosSearchOrders';
const error = 'Something went wrong...';

export const handleSearchUser = (e, setIsLoading, setOrders) => {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  if (!email.trim()) return Notiflix.Notify.failure('enter something');
  setIsLoading(true);
  getOrdersUser(email)
    .then(data => {
      setOrders(data);
    })
    .catch(() => {
      Notiflix.Notify.failure(error);
    })
    .finally(() => setIsLoading(false));
};
