import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: block;
  font-size: 10px;
  height: 24px;
  border-radius: 4px;
  &:hover {
    background: rgb(240, 240, 240);
  }
`;
