import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TwitterLogoCover,
  TwitterLogo,
  LoginCover,
  LoginText,
  ButtonConatiner,
  ForgotAndRegister,
  Links,
  ErrorTag,
} from '../Login/login.styles';
import { twitter } from '../../utils/Icons';
import FormInput from '../Form/form.components';
import TwitterButton from '../Button/button.components';
import {
  signupUser,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import UserActionTypes from '../../redux/user/user.types';
import { AuthError } from '../../redux/user/user.selector';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    displayName: '',
  });

  const logErr = useSelector((state) => AuthError(state));

  const { displayName, email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signupUser(email, password);
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        email: '',
        password: '',
        displayName: '',
      });
      history.push('/');
    } catch (error) {
      const err = error.message;
      dispatch({ type: UserActionTypes.SIGNUP_ERROR, err });
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
        <span>Sign Up</span>
      </LoginText>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="name"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="displayName"
          required
        ></FormInput>
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
          <TwitterButton type="submit">Sign up </TwitterButton>
        </ButtonConatiner>
      </form>
      <ForgotAndRegister>
        <Links to="/login"> Already have an account?</Links>
      </ForgotAndRegister>
      <ErrorTag>{logErr ? <span>{logErr}</span> : null}</ErrorTag>
    </LoginCover>
  );
};

export default SignUp;
