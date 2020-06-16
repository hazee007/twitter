import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { Redirect } from 'react-router-dom';
import { DropDownContainer, DropDownList } from './dropdown.styles';

const DropDown = ({ show, close, children, user }) => {
  console.log(user);
  return (
    <DropDownContainer>
      <DropDownList>Add an existing account</DropDownList>
      <DropDownList>Manage accounts</DropDownList>
      {user ? (
        <DropDownList onClick={() => auth.signOut()}>Log out</DropDownList>
      ) : (
        <Redirect to="/" />
      )}
    </DropDownContainer>
  );
};

export default DropDown;
