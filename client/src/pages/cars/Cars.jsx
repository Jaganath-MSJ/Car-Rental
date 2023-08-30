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
  const [sortBy, setSortBy] = useState("Latest Car");
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
  const sortByFilter = filterSearch.sort((a, b) => {
    if (sortBy === "Latest Car") {
      return new Date(b.updatedOn) - new Date(a.updatedOn);
    } else if (sortBy === "Oldest Car") {
      return new Date(a.updatedOn) - new Date(b.updatedOn);
    } else if (sortBy === "Price Low to High") {
      return Number(a.rent) - Number(b.rent);
    } else if (sortBy === "Price High to Low") {
      return Number(b.rent) - Number(a.rent);
    } else if (sortBy === "Rating High to Low") {
      return (
        (b.reviews.reduce((c, d) => d.rating + c, 0) / b.reviews.length || 0) -
        (a.reviews.reduce((c, d) => d.rating + c, 0) / a.reviews.length || 0)
      );
    } else if (sortBy === "Rating Low to High") {
      return (
        (a.reviews.reduce((c, d) => d.rating + c, 0) / a.reviews.length || 0) -
        (b.reviews.reduce((c, d) => d.rating + c, 0) / b.reviews.length || 0)
      );
    }
    return new Date(b.updatedOn) - new Date(a.updatedOn);
  });
  let content;
  if (!filterSearch || filterSearch.length === 0) {
    content = <h1>No cars available</h1>;
  } else {
    content = sortByFilter.map((car) => {
      return <EachCar car={car} key={car.carId} />;
    });
  }
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
            <div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="showFilters"
              >
                Show Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Latest Car">Latest Car</option>
                <option value="Oldest Car">Oldest Car</option>
                <option value="Rating High to Low">Rating High to Low</option>
                <option value="Rating Low to High">Rating Low to High</option>
              </select>
            </div>
          </div>
          <div className="allCars">{content}</div>
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
        display: flex;
        gap: 1rem;
        input,
        select {
          outline: none;
          width: 90%;
          color: #4d4d4d;
          padding: 0.5rem 0.8rem;
          border: 1px solid #c2c2c2;
          border-radius: 0.2rem;
        }
        select {
          width: 10rem;
        }
        .showFilters {
          display: none;
        }
      }
      .allCars {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        max-height: 39rem;
        overflow: auto;
        & > h1 {
          margin: 0 auto;
        }
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
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
          .showFilters {
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
