import React from "react";
import styled from "styled-components";

function CancelPolicy({ onClose }) {
  return (
    <PopUp>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        <h4>Cancellation Policy</h4>
        <p>
          You're eligible for a full refund for cancellations made 24 hours
          before your booking start time
        </p>
        <p>
          You're eligible for a 50% refund for cancellations made between 24
          hours to 6 hours before your booking starte No refund will be issued
          for cancellations made in the last 4 hours before or after your
          booking at one
        </p>
      </div>
    </PopUp>
  );
}

const PopUp = styled.section`
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
    width: 30rem;
    height: max-content;
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
    p {
      text-align: justify;
    }
  }
`;
export default CancelPolicy;
