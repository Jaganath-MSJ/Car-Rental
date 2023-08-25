import React, { useState } from "react";
import styled from "styled-components";
import EachCar from "../../components/cars/EachCar";
import CarFilters from "../../components/cars/CarFilters";
import { store } from "../../app/store.js";
import { getAllCars, selectAllCar } from "../../features/carSlice";
import { useSelector } from "react-redux";

store.dispatch(getAllCars());

function Cars() {
  const cars = useSelector(selectAllCar);
  const [showFilters, setShowFilters] = useState(false);
  const [searchCar, setSearchCar] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    "Car type": [],
    "Fuel type": [],
    "Gear type": [],
    Price: [],
    "Air Condition": [],
  });

  const filterSearch = cars.filter((car) => {
    return (
      (!searchCar ||
        car.carName.toLowerCase().includes(searchCar.toLowerCase().trim())) &&
      (selectedFilters["Car type"].length === 0 ||
        selectedFilters["Car type"].includes(car?.category)) &&
      (selectedFilters["Fuel type"].length === 0 ||
        selectedFilters["Fuel type"].includes(car?.fuelType)) &&
      (selectedFilters["Gear type"].length === 0 ||
        selectedFilters["Gear type"].includes(car?.gearType)) &&
      (selectedFilters["Air Condition"].length === 0 ||
        selectedFilters["Air Condition"].includes(car?.airCondition)) &&
      (selectedFilters["Price"].length === 0 ||
        selectedFilters["Price"].includes(car?.rent))
    );
  });

  return (
    <Container>
      <h1>Explore our car options</h1>
      <div>
        <div className="maxFilters">
          <CarFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="minFilters">
          {showFilters && (
            <CarFilters
              setShowFilters={setShowFilters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}
        </div>
        <div className="cars">
          <div className="carSearch">
            <input
              type="search"
              name="search"
              placeholder="Search"
              value={searchCar}
              onChange={(e) =>
                setSearchCar(e.target.value.replace(/\s+/g, " "))
              }
            />
            <button onClick={() => setShowFilters(!showFilters)}>
              Show Filters
            </button>
          </div>
          <div className="allCars">
            {filterSearch.map((car) => {
              return <EachCar car={car} key={car.carId} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    padding-bottom: 1rem;
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
