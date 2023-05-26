import Notiflix from 'notiflix';

export const onClickFood = (food, setCounter, setCart) => {
  setCounter(prevState => (prevState += 1));
  Notiflix.Notify.success('Product added to cart');
  setCart(prevState => {
    if (prevState.length < 1) {
      prevState[0] = { ...food, count: 1 };
      return prevState;
    }
    let repeat;
    const newArray = prevState.map(el => {
      if (el._id === food._id) {
        el.count += 1;
        repeat = true;
      }
      return el;
    });
    if (repeat) return newArray;
    const newFood = { ...food, count: 1 };
    prevState.push(newFood);
    return prevState;
  });
};
