import { Button } from '@chakra-ui/react';
import { BlockShops } from './Shop.styled';
import { Heading } from '@chakra-ui/react';

const Shops = ({ shops, setIdShop, foods, counter }) => {
  const onDisabledButton = (foods, id) => {
    if (counter === 0) return;
    if (foods[0].idShop === id) return false;
    return true;
  };

  return (
    <BlockShops>
      <Heading as="h1" size="xl" mb="45px" noOfLines={1}>
        Shops:
      </Heading>
      <ul>
        {shops.map(({ nameShop, _id }) => {
          return (
            <li key={_id}>
              <Button
                onClick={() => setIdShop(_id)}
                isDisabled={onDisabledButton(foods, _id)}
                mb="40px"
                p="30px"
                w="170px"
                colorScheme="blue"
              >
                {nameShop}
              </Button>
            </li>
          );
        })}
      </ul>
    </BlockShops>
  );
};
export default Shops;
