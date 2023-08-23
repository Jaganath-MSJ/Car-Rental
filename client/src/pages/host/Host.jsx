import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import HostEachCar from "../../components/host/HostEachCar";
import { getCurrentUser } from "../../features/userSlice";
import { selectCarsByUserId } from "../../features/carSlice";
function Host() {
  const { userId } = useSelector(getCurrentUser);
  const hostCars = useSelector((state) => selectCarsByUserId(state, userId));
  return (
    <Cointainer>
      <div className="hostTop">
        <div className="hostIncome">
          <div className="incomeDetails">
            <h2>Welcome!</h2>
            <p>
              Income last <span>30 days</span>
            </p>
            <h1>&#x20B9;29200</h1>
          </div>
          <div>
            <Link to="/host/income">Details</Link>
          </div>
        </div>
        <div className="hostReview">
          <div className="reviewDetails">
            <h3>Review score</h3>
            <p>
              <AiFillStar />
              <span>5.0</span>/5
            </p>
          </div>
          <div>
            <Link to="/host/review">Details</Link>
          </div>
        </div>
      </div>
      <div className="hostCars">
        <div className="carsHeader">
          <h3>Your listed cars</h3>
          <Link to="/host/cars">View all</Link>
        </div>
        <div className="sampleCars">
          {hostCars.slice(0, 4).map((car) => {
            return (
              <Link to={`/host/cars/${car.carId}`} key={car.carId}>
                <HostEachCar hostCar={car} />
              </Link>
            );
          })}
        </div>
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem;
  min-height: 71vh;
  .hostTop {
    display: flex;
    gap: 2rem;
    .hostIncome {
      background-color: #ffead0;
      border-radius: 0.3rem;
      padding: 1rem;
      width: 35%;
      display: flex;
      justify-content: space-between;
      .incomeDetails {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
        & > * {
          margin: 0;
        }
        & > p {
          color: #4d4d4d;
          & > span {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 0.25rem;
          }
        }
        & > h1 {
          font-size: 2rem;
        }
      }
      & > div:last-child {
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        & > a:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
    .hostReview {
      background-color: #ffddb2;
      border-radius: 0.3rem;
      padding: 1rem;
      width: 35%;
      display: flex;
      justify-content: space-between;
      .reviewDetails {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        & > h3 {
          font-size: 1.5rem;
        }
        & > p {
          font-size: 1.2rem;
          & > svg {
            color: #ff8c38;
          }
          & > span {
            font-weight: bold;
          }
        }
      }
      & > div:last-child {
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        & > a:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
  }
  .hostCars {
    .carsHeader {
      display: flex;
      justify-content: space-between;
      & > h3 {
        font-size: 1.5rem;
      }
      & > a {
        align-self: center;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
    .sampleCars {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 2rem;
    }
  }
  @media only screen and (max-width: 820px) {
    .hostTop {
      .hostIncome,
      .hostReview {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 570px) {
    padding: 1rem 0;
    .hostTop {
      flex-direction: column;
      gap: 0;
      .hostIncome,
      .hostReview {
        width: 95%;
      }
      .hostIncome {
        border-radius: 0.3rem 0.3rem 0 0;
      }
      .hostReview {
        border-radius: 0 0 0.3rem 0.3rem;
      }
    }
  }
`;

export default Host;
