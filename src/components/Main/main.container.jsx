import React from 'react';
import { MainContainer, MainHeader } from './main.styles';
import PostCard from '../Postcard/postcard.components';

const Main = () => {
  return (
    <MainContainer>
      <MainHeader className="">Home</MainHeader>
      <PostCard />
    </MainContainer>
  );
};

export default Main;
