import styled from '@emotion/styled';

export const DropDownContainer = styled.div`
  position: absolute;
  bottom: 20%;
  top: 55%;
  width: 200px;
  background-color: rgb(21, 32, 43);
  border: 1px solid #474a4d;
  border-radius: 8px;
  //   padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`;

export const DropDownList = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  height: 50px;
  margin: 5px;
  border-top: 0.09px solid #c3c3c3;
  width: 200px;
  &:hover {
    background-color: rgb(25, 39, 52);
    cursor: pointer;
  }
`;
