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
            <p>Income for this month</p>
            <h3>&#x20B9;29200</h3>
          </div>
          <div>
            <Link to="/host/income" className="btn-secondary">
              Details
            </Link>
          </div>
        </div>
        <div className="hostReview">
          <div className="reviewDetails">
            <h2>Review score</h2>
            <h3>
              <AiFillStar />
              5.0
              <span>Overall</span>
            </h3>
          </div>
          <div>
            <Link to="/host/review" className="btn-secondary">
              Details
            </Link>
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
            return <HostEachCar hostCar={car} key={car.carId} />;
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
  .hostTop {
    display: flex;
    flex-direction: column;
    width: 30%;
    & > div {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
        & > p {
          color: #4d4d4d;
          & > span {
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 0.25rem;
          }
        }
        & > h3 {
          font-size: 1.4rem;
          display: flex;
          gap: 0.3rem;
          svg {
            color: #ff8c38;
          }
          span {
            font-weight: normal;
          }
        }
      }
      & > div:last-child {
        display: flex;
        align-items: center;
      }
    }
    .hostIncome {
      background-color: rgba(40, 167, 69, 0.5);
      border-radius: 0.3rem 0.3rem 0 0;
    }
    .hostReview {
      background-color: rgba(40, 167, 69, 0.8);
      border-radius: 0 0 0.3rem 0.3rem;
    }
  }
  .hostCars {
    width: 70%;
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
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    .hostTop,
    .hostCars {
      width: 100%;
    }
  }
`;

export default Host;
