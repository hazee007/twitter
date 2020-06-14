import React, { useState } from 'react';
import {
  TwitterLogoCover,
  TwitterLogo,
  LoginCover,
  LoginText,
  ButtonConatiner,
  ForgotAndRegister,
  Links,
} from './login.styles';
import { twitter } from '../../utils/Icons';
import FormInput from '../Form/form.components';
import TwitterButton from '../Button/button.components';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = auth.signInWithEmailAndPassword(email, password);
      await createUserProfileDocument(user);
      setUserCredentials({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
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
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Phone, email, or username"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        ></FormInput>
        <ButtonConatiner>
          <TwitterButton type="submit">Log in </TwitterButton>
        </ButtonConatiner>
      </form>
      <ForgotAndRegister>
        <Links to="#"> Forget password?</Links> &nbsp; &nbsp;
        <Links to="/register">Sign up for Twitter</Links>
      </ForgotAndRegister>
    </LoginCover>
  );
};

export default Login;
