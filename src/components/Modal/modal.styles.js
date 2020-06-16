import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  background-color: rgb(21, 32, 43);
  color: white;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin-left: 250px;
  transition: all 0.8s;
  position: absolute;
  top: 20%;
  width: 40%;
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  padding: 5px 20px;
  border-bottom: 0.01rem solid #d0cccc;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const BackDrop = styled.div`
  color: white;
  background-color: rgba(48, 49, 48, 0.42);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 1.3s;
  height: 100%;
  width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  justfy-content: space-between;
  //   align-items: center;
  width: 50%;
`;

export const EmptyDiv = styled.div`
  width: 50%;
`;

export const FormContainer = styled.div``;

export const CloseSpan = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;

  &:hover {
    color: black;
  }
`;
