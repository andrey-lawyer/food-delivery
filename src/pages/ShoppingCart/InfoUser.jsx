import {  FormLabel, Input } from '@chakra-ui/react';
import { ErrorMessage, Field } from 'formik';

import { BlockInfoUser } from './ShoppingCart.styled';

import './../ShoppingCart/cartStile.css';

const InfoUser = () => {
  return (
    <BlockInfoUser>
      <FormLabel position="relative">
        Name
        <Field
          as={Input}
          mt="5px"
          shadow="dark-lg"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <ErrorMessage className="error" component="div" name="name" />
      </FormLabel>
      <FormLabel mt="50px" position="relative">
        Email
        <Field
          as={Input}
          mt="5px"
          shadow="dark-lg"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage className="error" component="div" name="email" />
      </FormLabel>
      <FormLabel mt="50px" position="relative">
        Phone
        <Field
          as={Input}
          mt="5px"
          shadow="dark-lg"
          type="tel"
          name="phone"
          placeholder="Phone"
        />
        <ErrorMessage className="error" component="div" name="phone" />
      </FormLabel>

      <FormLabel mt="50px" position="relative">
        Address
        <Field
          as={Input}
          mt="5px"
          shadow="dark-lg"
          type="text"
          name="address"
          placeholder=" Address"
        />
        <ErrorMessage className="error" component="div" name="address" />
      </FormLabel>
    </BlockInfoUser>
  );
};
export default InfoUser;
