import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LoginCover = styled.div`
    display: grid,
    // justify-content: center;
    width: 400px
`;

export const TwitterLogoCover = styled.div`
  display: grid;
  justify-content: center;
  padding-bottom: 20px;
`;

export const TwitterLogo = styled.svg`
  width: 2em;
  fill: rgb(255, 255, 255);
`;

export const LoginText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bolder;
  font-size: 24px;
  color: white;
`;

export const ButtonConatiner = styled.div`
  display: flex;
  justify-content: center;
`;

export const ForgotAndRegister = styled.div`
  display: flex;
  justify-content: center;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  color: rgb(29, 161, 242);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ErrorTag = styled.div`
  display: flex;
  justify-content: center;
  color: red;
`;
