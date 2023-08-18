import React from "react";
import styled from "styled-components";
import CarCategory from "./CarCategory";

function EachCar({ car }) {
  return (
    <Car>
      <div className="carImage">
        <img src={car.img} alt={car.name} draggable="false" />
      </div>
      <div className="carDetails">
        <div className="carName">
          <h2>{car.name}</h2>
          <CarCategory category={car.category} />
        </div>
        <div className="carPrice">
          <p>
            <span>${car.price}</span>/day
          </p>
        </div>
      </div>
    </Car>
  );
}

const Car = styled.article`
  .carImage {
    & > img {
      width: 15rem;
      height: 10rem;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }
  .carDetails {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    padding-top: 0.4rem;
    .carName {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > h2 {
        margin: 0;
      }
    }
    .carPrice {
      & > p {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        & > span {
          font-size: 1.2rem;
          font-weight: bold;
        }
      }
    }
  }
`;

export default EachCar;
