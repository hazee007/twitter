import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  LabeDiv,
  LabelContainer,
} from './form.styles';

const FormInput = ({ label, handleChange, ...OtherProps }) => (
  <GroupContainer>
    <LabelContainer>
      <LabeDiv>
        <span>{label}</span>
      </LabeDiv>
      <FormInputContainer onChange={handleChange} {...OtherProps} />
    </LabelContainer>
  </GroupContainer>
);

export default FormInput;
