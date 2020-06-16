import React from 'react';
import {
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormContainer,
  CloseSpan,
  EmptyDiv,
} from './modal.styles';
import { TweetButton } from '../Button/button.styles';
import {
  PostTest,
  PostImageContainer,
  PostImage,
} from '../Postcard/postcard.styles';

const Modal = ({ close, show, children }) => {
  console.log(show, children, close);
  return (
    <div>
      <ModalWrapper
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <ModalHeader>
          <CloseSpan onClick={close}>×</CloseSpan>
        </ModalHeader>
        <ModalBody>
          <PostTest>
            <PostImageContainer>
              <PostImage
                src="https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg"
                alt="messi"
              />
            </PostImageContainer>
          </PostTest>
          <FormContainer>
            <p>{children}</p>
          </FormContainer>
        </ModalBody>
        <ModalFooter>
          <EmptyDiv></EmptyDiv>
          <TweetButton>Tweet</TweetButton>
        </ModalFooter>
      </ModalWrapper>
    </div>
  );
};

export default Modal;
