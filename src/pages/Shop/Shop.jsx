import { useState } from 'react';
import { MyThreeDots } from 'components/Loaders/MyThreeDots';
import { SectionShop } from './Shop.styled';
import Shops from './Shops';
import Foods from './Foods';
import { useShop } from 'hooks/useShop';

const Shop = () => {
  const [counter, setCounter] = useState(0);

  const { isLoading, setIdShop, shops, foods } = useShop();

  return (
    <main>
      <SectionShop isLoading={isLoading}>
        {shops.length > 0 && (
          <Shops
            shops={shops}
            setIdShop={setIdShop}
            foods={foods}
            counter={counter}
          />
        )}
        {foods.length > 0 && <Foods foods={foods} setCounter={setCounter} />}
        {isLoading && <MyThreeDots />}
      </SectionShop>
    </main>
  );
};
export default Shop;
