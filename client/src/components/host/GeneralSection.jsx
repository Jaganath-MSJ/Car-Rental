import React from "react";
import Data from "../../data/data.json";
import styled from "styled-components";

function GeneralSection({ formData, handleChange }) {
  return (
    <Cointainer className="generalInput">
      <input
        type="text"
        name="carName"
        placeholder="Car Name"
        value={formData["carName"]}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Car Model"
        value={formData["model"]}
        onChange={handleChange}
      />
      <input
        type="text"
        name="carNumber"
        placeholder="Car Number"
        value={formData["carNumber"]}
        onChange={handleChange}
      />
      <select
        name="category"
        value={formData["category"]}
        onChange={handleChange}
      >
        <option value="">Select a Category</option>
        {Data.filters[0].types.map((filter) => {
          return (
            <option key={filter.id} value={filter.name}>
              {filter.name}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        name="rent"
        placeholder="Rent /day"
        value={formData["rent"]}
        onChange={handleChange}
      />
      <textarea
        type="text"
        name="description"
        placeholder="Car Description"
        value={formData["description"]}
        onChange={handleChange}
      />
    </Cointainer>
  );
}

const Cointainer = styled.section`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > input,
  & > textarea,
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
  & > textarea {
    height: 8rem;
    resize: none;
  }
`;

export default GeneralSection;
