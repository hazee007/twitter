import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SideCover = styled.div``;

export const SideList = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 10px;
  font-size: 20px;
  &:hover {
    border-radius: 50px;
    background-color: rgba(29, 161, 242, 0.1);
    // text-color: blue;
  }
`;

export const SideLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: blue;
  }
`;

export const SideIcon = styled.svg`
  height: 1.75rem;
  padding: 10px;
  vertical-align: text-bottom;
  fill: rgb(255, 255, 255);
`;

export const AccounMenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  &:hover {
    border-radius: 50px;
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const SideUser = styled.div`
  color: white;
  // background-color: red;
`;
