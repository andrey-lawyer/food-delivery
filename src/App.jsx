import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';

import styled from '@emotion/styled';
import Layout from 'components/Layout/Layout';
import Shop from 'pages/Shop/Shop';
import ShoppingCart from 'pages/ShoppingCart/ShoppingCart';
import Coupons from 'pages/Coupons/Coupons';
import History from 'pages/History/History';

export const Context = createContext();

export const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="history" element={<History />} />
            <Route path="coupons" element={<Coupons />} />
          </Route>
          <Route path="*" element={<Shop />} />
        </Routes>
      </Container>
    </Context.Provider>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
