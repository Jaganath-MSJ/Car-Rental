import React from "react";
import styled from "styled-components";

function PriceSummary({ onClose, rentCar, price }) {
  return (
    <PopUp>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        <h2>Price Breakup</h2>
        <p>Trip Fare (Unlimited Kms without fuel) Rs.{price}</p>
        <p>
          Damage Protection Fee <span>&#x20B9;399</span>
        </p>
        <p>
          Convenience Fee <span>&#x20B9;99</span>
        </p>
        <h5>
          Total Fee <span>&#x20B9;{price + 399 + 99}</span>
        </h5>
        <div>
          <button
            onClick={() => {
              onClose(false);
              rentCar(true);
            }}
          >
            Continue
          </button>
        </div>
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
    width: max-content;
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
    & > p,
    & > h5 {
      display: flex;
      justify-content: space-between;
    }
    & > div {
      display: flex;
      justify-content: center;
      & > button {
        background-color: #e17654;
        border: none;
        outline: none;
        color: #fff7ed;
        font-size: 1.1rem;
        border-radius: 0.3rem;
        padding: 0.3rem 0.5rem;
        cursor: pointer;
      }
    }
  }
`;
export default PriceSummary;
