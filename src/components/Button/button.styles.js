import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TweetButton = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 45px;
  background-color: rgb(29, 161, 242);
  border-radius: 50px;
  &:hover {
    cousor: pointer;
    background-color: rgb(26, 145, 218);
  }
  margin: 10px 0;
`;

export const TweetLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
`;
