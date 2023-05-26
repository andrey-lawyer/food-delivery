import { Heading, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { Context } from 'App';
import { useContext } from 'react';
import { onClickFood } from 'services/onClickFood';

import { BlockFoods, FoodItem, FoodList } from './Shop.styled';
import { url } from 'data/url';

const Foods = ({ foods, setCounter }) => {
  const { setCart } = useContext(Context);

  return (
    <BlockFoods>
      <Heading as="h2" size="lg" mb="50px" noOfLines={1}>
        {foods[1].nameShop}
      </Heading>
      <FoodList>
        {foods.map(({ nameFood, price, photo, _id, nameShop, idShop }) => (
          <FoodItem key={_id}>
            <img src={url + photo} alt={nameFood} width={400} height={300} />
            <Text fontSize="xl" p="3px">
              {nameFood}
            </Text>
            <Text fontSize="lg" p="3px">
              price: {price}
            </Text>
            <Button
              onClick={() =>
                onClickFood(
                  { nameFood, price, photo, _id, nameShop, idShop },
                  setCounter,
                  setCart
                )
              }
              m="7px"
              colorScheme="blue"
            >
              add to Cart
            </Button>
          </FoodItem>
        ))}
      </FoodList>
    </BlockFoods>
  );
};
export default Foods;
