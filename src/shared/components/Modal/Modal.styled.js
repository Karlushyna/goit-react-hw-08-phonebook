import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90000;
  /* overflow-y: scroll; */
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms var(--time-function),
    visibility 250ms var(--time-function);
`;

export const ModalBox = styled.div`
  @media screen and (max-width: 420px) {
    max-width: 90%;
  }
  border-radius: 30px;
  background-color: rgb(21, 62, 73);
  color: #fff;
  height: 390px;
  width: 360px;
  padding: 40px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(29, 33, 39);
`;
