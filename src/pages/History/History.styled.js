import styled from '@emotion/styled';

export const ItemOrder = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const Item = styled.li`
  padding: 20px;
  border: 1px solid blue;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListOrder = styled.ul`
  margin-top: 40px;
`;
