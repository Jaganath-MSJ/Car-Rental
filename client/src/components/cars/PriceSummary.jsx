import React, { useContext } from "react";
import styled from "styled-components";
import { SearchQuary } from "../../App";
import { Link } from "react-router-dom";

function PriceSummary({ onClose, rentCar, price, isCarRented }) {
  const { searchQuary } = useContext(SearchQuary);
  return (
    <PopUp>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        <h2>Price Breakup per day</h2>
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
        {(!searchQuary.startDate || !searchQuary.endDate) && !isCarRented && (
          <p className="error">
            Please select <Link to="/cars">pick-up and drop-off</Link> date to
            continue
          </p>
        )}
        <div>
          {!isCarRented && (
            <button
              disabled={!searchQuary.startDate || !searchQuary.endDate}
              style={{
                cursor:
                  !searchQuary.startDate || !searchQuary.endDate
                    ? "not-allowed"
                    : "pointer",
              }}
              onClick={() => {
                onClose(false);
                rentCar(true);
              }}
            >
              Continue
            </button>
          )}
        </div>
        {isCarRented && <p className="error">Your car is already rented</p>}
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
    width: 20rem;
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
    .error {
      display: inline;
      align-self: center;
      text-align: center;
      & > a {
        color: #ff8c38;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
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
