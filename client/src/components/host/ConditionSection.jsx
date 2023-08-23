import React from "react";
import Data from "../../data/data.json";
import styled from "styled-components";

function ConditionSection({ formData, handleChange }) {
  const fuelType = Data.filters.find(
    (filter) => filter.filtername === "Fuel type"
  ).types;
  const gearType = Data.filters.find(
    (filter) => filter.filtername === "Gear type"
  ).types;
  const airCondition = Data.filters.find(
    (filter) => filter.filtername === "Air Condition"
  ).types;
  return (
    <Cointainer className="conditionInput">
      <input
        type="text"
        name="noOfSeats"
        placeholder="No of Seats"
        value={formData["noOfSeats"]}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mileage"
        placeholder="Current mileage in km/hr"
        value={formData["mileage"]}
        onChange={handleChange}
      />
      <select
        name="fuelType"
        value={formData["fuelType"]}
        onChange={handleChange}
      >
        <option value="">Select a Fuel Type</option>
        {fuelType.map((filter) => {
          return (
            <option key={filter.id} value={filter.name}>
              {filter.name}
            </option>
          );
        })}
      </select>
      <select
        name="gearType"
        value={formData["gearType"]}
        onChange={handleChange}
      >
        <option value="">Select a Gear Type</option>
        {gearType.map((filter) => {
          return (
            <option key={filter.id} value={filter.name}>
              {filter.name}
            </option>
          );
        })}
      </select>
      <select
        name="airCondition"
        value={formData["airCondition"]}
        onChange={handleChange}
      >
        <option value="">Select is Air Condition</option>
        {airCondition.map((filter) => {
          return (
            <option key={filter.id} value={filter.value}>
              {filter.name}
            </option>
          );
        })}
      </select>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > input,
  & > select {
    outline: none;
    height: 1.3rem;
    color: #4d4d4d;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    border: 1px solid #c2c2c2;
    border-radius: 0.2rem;
  }
  & > select {
    height: 2.3rem;
    & > option:hover {
      background-color: dodgerblue;
    }
  }
`;

export default ConditionSection;
