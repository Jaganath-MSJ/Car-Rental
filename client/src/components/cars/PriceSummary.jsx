import React, { useContext } from "react";
import styled from "styled-components";
import { SearchQuary } from "../../App";
import { Link } from "react-router-dom";
import PopUp from "../../pages/PopUp";

function PriceSummary({ onClose, rentCar, price, isCarRented }) {
  const { searchQuary } = useContext(SearchQuary);
  return (
    <PopUp onClose={onClose}>
      <Cointainer>
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
            Please select <Link to="/">pick-up and drop-off</Link> date to
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
      </Cointainer>
    </PopUp>
  );
}

const Cointainer = styled.section`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;
export default PriceSummary;
