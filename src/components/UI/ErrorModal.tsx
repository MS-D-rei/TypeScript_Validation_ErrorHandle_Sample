import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { StyledCardBase } from '@/components/UI/StyledCard';
import StyledButton from '@/components/UI/StyledButton';

const ModalOverlay = (props: {
  title: string;
  message: string;
  onClick: Function;
}) => {
  const closeErrorModalHandler = () => {
    props.onClick();
  };
  return (
    <StyledCardErrorModal>
      <Header>
        <Title>{props.title}</Title>
      </Header>
      <Content>
        <p>{props.message}</p>
      </Content>
      <Footer>
        <StyledButton onClick={closeErrorModalHandler}>Okay</StyledButton>
      </Footer>
    </StyledCardErrorModal>
  );
};

function ErrorModal(props: {
  title: string;
  message: string;
  onClick: Function;
}) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root') as HTMLElement)}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick} />, document.getElementById('modal-root') as HTMLElement)}
    </React.Fragment>
  );
}

export default ErrorModal;

const StyledCardErrorModal = styled(StyledCardBase)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
