import styled from '@emotion/styled';

export const BlockForm = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
export const BlockInfoUser = styled.div`
  padding: 20px 0px;
  text-align: 'center';
`;

export const BlockOrders = styled.div`
  padding: 20px 0px;
  padding-right: 30px;
  height: 75vh;

  overflow-y: auto;
  text-align: 'center';
`;

export const OrderItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const BlockItem = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BlockSubmit = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: 20px;
  justify-content: end;
  align-items: center;
`;
