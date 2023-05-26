const { useEffect, useState } = require('react');
const Cart_KEY = 'cart_database';
export const useLocal = cart => {
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem(Cart_KEY, JSON.stringify(cart));
    }
    const savedState = localStorage.getItem(Cart_KEY);
    let parseState;
    try {
      parseState = JSON.parse(savedState) ?? [];
    } catch (error) {
      parseState = [];
    }
    setLocalCart(parseState);
  }, [cart]);

  return { localCart, setLocalCart };
};
