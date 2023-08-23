import React from "react";
import styled from "styled-components";
import { formatDate2 } from "../../utils/DateFunction";
import Data from "../../data/data.json";

function HostIncome() {
  return (
    <Cointainer>
      <div className="incomeGraph">
        <header>
          <h1>Income</h1>
          <p>
            Last <span>30 days</span>
          </p>
        </header>
        <div>
          <h1>&#x20B9;29200</h1>
        </div>
      </div>
      <div className="trancactions">
        <div className="transHeader">
          <h2>Your transactions {`(${Data.transactions.length})`}</h2>
          <p>
            Last <span>30 days</span>
          </p>
        </div>
        <div className="allTrans">
          {Data.transactions.map((transaction, index) => {
            return (
              <article key={index}>
                <div className="transPrice">&#x20B9;{transaction.price}</div>
                <div className="transDate">{formatDate2(transaction.date)}</div>
              </article>
            );
          })}
        </div>
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1.5rem 1rem;
  display: flex;
  gap: 2rem;
  .incomeGraph {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    & > header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      & > p {
        & > span {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
    & > div {
      & > h1 {
        font-size: 1.7rem;
      }
    }
  }
  .trancactions {
    width: 50%;
    .transHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > p {
        & > span {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
    .allTrans {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & > article {
        background-color: white;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0.3rem;
        display: flex;
        .transPrice {
          font-size: 1.3rem;
          font-weight: bold;
        }
        .transDate {
          color: #4d4d4d;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0;
    .incomeGraph,
    .trancactions {
      width: 100%;
    }
  }
`;

export default HostIncome;
