import React from 'react';
import { MainContainer, MainHeader } from './main.styles';
import PostCard from '../Postcard/postcard.components';

const Main = () => {
  return (
    <MainContainer>
      <MainHeader>Home</MainHeader>
      <PostCard />
    </MainContainer>
  );
};

export default Main;
