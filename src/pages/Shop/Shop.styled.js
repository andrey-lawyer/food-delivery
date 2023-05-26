import styled from '@emotion/styled';
export const SectionShop = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const BlockShops = styled.div`
  padding: 10px;
  text-align: 'center';
`;

export const BlockFoods = styled.div`
  height: 90vh;
  overflow-y: auto;
  padding: 10px;
  text-align: center;
  padding-right: 20px;
`;
export const FoodList = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

export const FoodItem = styled.li`
  text-align: center;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;
