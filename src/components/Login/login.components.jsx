import React from 'react';
import {
  TwitterLogoCover,
  TwitterLogo,
  LoginCover,
  LoginText,
} from './login.styles';
import { twitter } from '../../utils/Icons';
import FormInput from '../Form/form.components';
import { TweetButton } from '../Button/button.styles';

const Login = () => {
  return (
    <LoginCover>
      <TwitterLogoCover>
        <TwitterLogo viewBox="0 0 24 24">
          <g>
            <path d={twitter}></path>
          </g>
        </TwitterLogo>
      </TwitterLogoCover>
      <LoginText>
        <span>Log in to Twitter</span>
      </LoginText>
      <form>
        <FormInput
          type="email"
          name="email"
          label={'Phone, email, or username'}
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          label={'Password'}
        ></FormInput>

        <TweetButton type="submit">Log in</TweetButton>
      </form>
    </LoginCover>
  );
};

export default Login;
