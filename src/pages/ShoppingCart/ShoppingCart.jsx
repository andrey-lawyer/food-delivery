import { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Heading, Text } from '@chakra-ui/react';

import { schema } from '../../services/validation';
import { Context } from 'App';
import InfoUser from './InfoUser';
import Orders from './Orders';
import { MyThreeDots } from 'components/Loaders/MyThreeDots';

import { BlockForm, BlockSubmit } from './ShoppingCart.styled';
import { useLocal } from 'hooks/useLocal';
import { onSubmit } from 'services/onSubmitForm';

const ShoppingCart = () => {
  const { cart } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const { localCart, setLocalCart } = useLocal(cart);

  const giveTotalPrice = cart => {
    return cart.reduce((value, el) => {
      const count = el.count * el.price;
      return count + value;
    }, 0);
  };

  return (
    <main>
      <section>
        {isLoading && <MyThreeDots />}
        {localCart.length > 0 ? (
          <>
            <Heading as="h1" size="lg" textAlign={'center'} noOfLines={1}>
              Shop to order: {localCart[1]?.nameShop}
            </Heading>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                address: '',
              }}
              validationSchema={schema}
              onSubmit={(values, actions) =>
                onSubmit(
                  values,
                  actions,
                  localCart,
                  giveTotalPrice,
                  setIsLoading
                )
              }
            >
              {() => {
                return (
                  <Form>
                    <BlockForm>
                      <InfoUser />
                      <Orders
                        localCart={localCart}
                        setLocalCart={setLocalCart}
                      />
                    </BlockForm>
                    <BlockSubmit>
                      <Text fontSize="lg" p="3px">
                        Total price: {giveTotalPrice(localCart)}
                      </Text>
                      <Button
                        type="submit"
                        ml="20px"
                        mb="10px"
                        px="30px"
                        colorScheme="blue"
                      >
                        Submit
                      </Button>
                    </BlockSubmit>
                  </Form>
                );
              }}
            </Formik>
          </>
        ) : (
          <Heading as="h1" size={'3xl'} textAlign={'center'} noOfLines={1}>
            There is nothing here yet
          </Heading>
        )}
      </section>
    </main>
  );
};
export default ShoppingCart;
