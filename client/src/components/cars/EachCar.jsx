import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BsGearFill, BsSpeedometer2, BsFillBookmarkFill } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import CarCategory from "./CarCategory";
import { Link } from "react-router-dom";

function EachCar({ car }) {
  return (
    <Car>
      <div className="carImage">
        <Link to={`/cars/${car.carId}`}>
          <img src={car.carPhotos[0]} alt={car.carName} draggable="false" />
        </Link>
        <div>
          <p>
            <AiFillStar /> {4.5}/5 reviews
          </p>
          <p>{5} trips</p>
        </div>
      </div>
      <div className="carDetails">
        <div className="carType">
          <CarCategory category={car.category} />
          <p className="fuel">{car.fuelType}</p>
          <p className="pick">{"Top"}</p>
        </div>
        <div className="carName">
          <h2>{car.carName}</h2>
        </div>
        <div className="carSmallDetails">
          <div>
            <MdOutlineAirlineSeatReclineNormal />
            <p>{`${car.noOfSeats} seats`}</p>
          </div>
          <div>
            <BsGearFill />
            <p>{car.gearType}</p>
          </div>
          <div>
            <BsSpeedometer2 />
            <p>{`${car.mileage}km/hr`}</p>
          </div>
          <div>
            <TbAirConditioning />
            <p>{car.airCondition ? "AC" : "Non-AC"} condition</p>
          </div>
        </div>
        <div className="carPrice">
          <p>&#x20B9;{car.rent}/day</p>
          <Link to={`/cars/${car.carId}`}>View All Details</Link>
          <BsFillBookmarkFill />
        </div>
      </div>
    </Car>
  );
}

const Car = styled.article`
  display: flex;
  gap: 0.5rem;
  .carImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    & img {
      width: 15rem;
      height: 10rem;
      border-radius: 0.5rem;
      object-fit: cover;
    }
    & > div {
      display: flex;
      gap: 1rem;
      & > p {
        & > svg {
          color: #ff8c38;
        }
      }
    }
  }
  .carDetails {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0.2rem;
    .carType {
      display: flex;
      gap: 0.3rem;
      .fuel,
      .pick {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        border-radius: 0.3rem;
        color: #ffead0;
      }
      .fuel {
        width: 5rem;
        background-color: green;
      }
      .pick {
        width: 5.5rem;
        background-color: blue;
      }
    }
    .carName {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .carSmallDetails {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 0.7rem 0.5rem;
      & > div {
        display: flex;
        gap: 0.3rem;
      }
    }
    .carPrice {
      display: flex;
      justify-content: space-between;
      & > p {
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        font-weight: bold;
      }
      & > a {
        background-color: #ff8c38;
        color: #fff7ed;
        padding: 0.3rem 0.5rem;
        border-radius: 0.3rem;
        &:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
          color: #161616;
        }
      }
      & > svg {
        color: gray;
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default EachCar;
