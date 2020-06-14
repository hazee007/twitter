import styled from '@emotion/styled';

export const GroupContainer = styled.div`
  width: 500px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom-width: 2px;
  background-color: rgb(25, 39, 52);
  border-bottom-color: rgb(136, 153, 166);
  border-bottom-style: solid;
  margin: 10px;

  &:focus {
    border-bottom-style: solid;
    border-bottom-color: rgb(29, 161, 242);
  }
`;

export const LabelContainer = styled.div`
  font-weight: 400;
  padding-left: 10px;
  padding-right: 10px;
`;

export const LabeDiv = styled.div`
  color: rgb(136, 153, 166);
  font-size: 15px;
  &:focus {
    border-bottom-color: rgb(29, 161, 242);
  }
`;

export const FormInputContainer = styled.input`
  padding-top: 5px;
  background-color: rgb(25, 39, 52);
  color: white;
  width: 480px;
  height: 25px;
  font-size: 20px;
  border: 0;
  &:focus {
    outline: none;
    border-bottom-color: rgb(29, 161, 242);
  }
`;
