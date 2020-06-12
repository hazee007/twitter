import React from 'react';
import { TweetButton, TweetLink } from './button.styles';

const TwitterButton = ({ title }) => {
  return (
    <TweetButton>
      <TweetLink to="#"> Tweet</TweetLink>
    </TweetButton>
  );
};

export default TwitterButton;
