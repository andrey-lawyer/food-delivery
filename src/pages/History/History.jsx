import { useState } from 'react';
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

import { MyThreeDots } from 'components/Loaders/MyThreeDots';

import { Item, ItemOrder, List, ListOrder } from './History.styled';
import { handleSearchUser } from 'services/onSearchOrder';

const History = () => {
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <section>
        <Heading as="h1" size="xl" p="10px" textAlign={'center'} noOfLines={1}>
          History of orders
        </Heading>
        <form onSubmit={e => handleSearchUser(e, setIsLoading, setOrders)}>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              shadow="dark-lg"
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" colorScheme="blue" type="submit">
                Show
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
        {orders?.length > 0 && (
          <ListOrder>
            {orders.map(({ totalPrice, order, _id }) => (
              <ItemOrder key={_id}>
                <Text fontSize="xl" p="3px">
                  Total price: {totalPrice}
                </Text>
                <List>
                  {order.map(({ price, product, amount }) => (
                    <Item key={product}>
                      <Text fontSize="xl" p="3px">
                        {product}
                      </Text>
                      <Text fontSize="xl" p="3px">
                        price: {price}
                      </Text>
                      <Text fontSize="xl" p="3px">
                        amount: {amount}
                      </Text>
                    </Item>
                  ))}
                </List>
              </ItemOrder>
            ))}
          </ListOrder>
        )}
        {orders?.length === 0 && (
          <Text fontSize="xl" p="3px">
            Sorry, there's nothing here...
          </Text>
        )}
        {isLoading && <MyThreeDots />}
      </section>
    </main>
  );
};
export default History;
