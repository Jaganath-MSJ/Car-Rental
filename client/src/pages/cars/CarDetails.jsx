import React from "react";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import Data from "../../data/data.json";
import CarCategory from "../../components/cars/CarCategory";

function CarDetails() {
  const { id } = useParams();
  const car = Data.cars[id];
  return (
    <Container>
      <div className="backLink">
        <Link to="..">
          <GoArrowLeft />
          Back to all cars
        </Link>
      </div>
      <div className="details">
        <div className="carImage">
          <img src={car.img} alt={car.name} draggable="false" />
        </div>
        <div className="carDescription">
          <CarCategory category={car.category} />
          <h1>{car.name}</h1>
          <p className="price">
            <span>${car.price}</span>/day
          </p>
          <p className="description">{car.description}</p>
          <button>Rent this car</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 4rem;
  min-height: 82.3vh;
  .backLink {
    & > a {
      display: flex;
      gap: 0.5rem;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.1rem;
      }
    }
  }
  .details {
    display: flex;
    gap: 0 2rem;
    .carImage {
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 30rem;
        height: 25rem;
        border-radius: 0.5rem;
        object-fit: contain;
      }
    }
    .carDescription {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      & > h1 {
        font-size: 2.5rem;
        margin: 0;
      }
      .price {
        margin: 0;
        & > span {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
      .description {
        text-align: justify;
      }
      & > button {
        background-color: #ff8c38;
        width: 10rem;
        height: 2.5rem;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        font-size: 1.01rem;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #161616;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    height: 100vw;
    .details {
      flex-direction: column;
      .carImage > img {
        width: 100%;
      }
    }
  }
`;

export default CarDetails;
