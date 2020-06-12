import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  LabeDiv,
  FormLabel,
  LabelContainer,
} from './form.styles';

const FormInput = ({ label }) => (
  <GroupContainer>
    <FormLabel>
      <LabelContainer>
        <LabeDiv>
          <span>{label}</span>
        </LabeDiv>
        <FormInputContainer></FormInputContainer>
      </LabelContainer>
    </FormLabel>
  </GroupContainer>
);

export default FormInput;
