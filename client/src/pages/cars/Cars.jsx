import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EachCar from "../../components/cars/EachCar";
import CarFilters from "../../components/cars/CarFilters";
import { store } from "../../app/store.js";
import { getAllCars, selectAllCar } from "../../features/carSlice";
import { useSelector } from "react-redux";

store.dispatch(getAllCars());

function Cars() {
  const cars = useSelector(selectAllCar);
  const [showFilters, setShowFilters] = useState(false);
  return (
    <Container>
      <h1>Explore our car options</h1>
      <div>
        <div className="maxFilters">
          <CarFilters />
        </div>
        <div className="minFilters">
          {showFilters && <CarFilters setShowFilters={setShowFilters} />}
        </div>
        <div className="cars">
          <div className="carSearch">
            <input type="search" placeholder="Search" />
            <button onClick={() => setShowFilters(!showFilters)}>
              Show Filters
            </button>
          </div>
          <div className="allCars">
            {cars.map((car) => {
              return (
                <Link to={`/cars/${car.carId}`} key={car.carId}>
                  <EachCar car={car} />
                </Link>
              );
            })}
          </div>
        </div>
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
  & > h1 {
    margin: 0;
  }
  & > div {
    display: flex;
    gap: 1rem;
    .minFilters {
      display: none;
    }
    .cars {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .carSearch {
        & > input {
          outline: none;
          width: 100%;
          color: #4d4d4d;
          padding: 0.5rem 0.8rem;
          border: 1px solid #c2c2c2;
          border-radius: 0.2rem;
        }
        & > button {
          display: none;
        }
      }
      .allCars {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem 3rem;
      }
    }
    @media screen and (max-width: 850px) {
      .maxFilters {
        display: none;
      }
      .minFilters {
        display: block;
        position: absolute;
        top: 5rem;
      }
      .cars {
        width: 100%;
        .carSearch {
          display: flex;
          gap: 0.5rem;
          & > button {
            display: block;
            background-color: #ffead0;
            border-radius: 0.3rem;
            border: none;
            outline: none;
            padding: 0.2rem;
          }
        }
      }
    }
  }
`;

export default Cars;
