import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModelOverlay = ({ children, onClose }) => {
  return (
    <PopupStyles>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        {children}
      </div>
    </PopupStyles>
  );
};

function PopUp({ children, onClose }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModelOverlay onClose={onClose}>{children}</ModelOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
}

const PopupStyles = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        color: red;
      }
    }
  }
`;

export default PopUp;
