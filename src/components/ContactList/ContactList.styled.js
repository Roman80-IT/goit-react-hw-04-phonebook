import { styled } from 'styled-components';

export const List = styled.ul`
  margin-top: 16px;
  list-style-type: circle;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 16px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  padding: 0;
  background-color: transparent;
  border: none;
  color: #cb4335;
`;
