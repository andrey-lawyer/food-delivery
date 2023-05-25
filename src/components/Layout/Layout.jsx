import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavItem, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavItem to="/" end>
            Shop
          </NavItem>
          <NavItem to="/cart">Shopping Cart</NavItem>
          <NavItem to="/history">History</NavItem>
          <NavItem to="/coupons">Coupons</NavItem>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
