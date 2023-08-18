import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Data from "../../data/data.json";
import EachCar from "../../components/cars/EachCar";

function Cars() {
  return (
    <Container>
      <div className="carsHeader">
        <h1>Explore our car options</h1>
        <div>
          {Data.filters.map((filter) => {
            return (
              <button className={filter} key={filter}>
                {filter}
              </button>
            );
          })}
          <p>Clear filters</p>
        </div>
      </div>
      <div className="allCars">
        {Data.cars.map((car, index) => {
          return (
            <Link to={`/cars/${index}`} key={car.name}>
              <EachCar car={car} />
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 1rem 2rem;
  min-height: 82.3vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .carsHeader {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    & > h1 {
      margin: 0;
    }
    & > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      & > button {
        background-color: #ffead0;
        color: #4d4d4d;
        border: none;
        width: 7rem;
        height: 2rem;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      .Hatchback:hover {
        background-color: #e17654;
        color: #ffead0;
      }
      .Sedan:hover {
        background-color: #161616;
        color: #ffead0;
      }
      .Mpv:hover {
        background-color: #115e59;
        color: #ffead0;
      }
      & > p {
        text-decoration: underline;
        text-underline-offset: 0.2rem;
        margin: 0;
        color: #4d4d4d;
        cursor: pointer;
      }
    }
  }
  .allCars {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 3rem;
  }
`;

export default Cars;
