import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';

import { BlockItem, BlockOrders, OrderItem } from './ShoppingCart.styled';
import { url } from 'data/url';

const Orders = ({ localCart, setLocalCart }) => {
  const onChangeCountFood = (value, idOrder) => {
    setLocalCart(prevState => {
      const newCart = prevState.map(el => {
        if (el._id === idOrder) {
          el.count = Number(value);
        }
        return el;
      });
      return newCart;
    });
  };
  return (
    <BlockOrders>
      <ul>
        {localCart.map(({ count, nameFood, photo, price, _id }) => (
          <OrderItem key={_id}>
            <img src={url + photo} alt={nameFood} width={200} height={200} />
            <BlockItem>
              <Text fontSize="xl" p="3px">
                {nameFood}
              </Text>
              <Text fontSize="lg" p="3px">
                price: {price}
              </Text>
              <NumberInput
                shadow="dark-lg"
                onChange={value => onChangeCountFood(value, _id)}
                defaultValue={count}
                min={1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </BlockItem>
          </OrderItem>
        ))}
      </ul>
    </BlockOrders>
  );
};
export default Orders;
