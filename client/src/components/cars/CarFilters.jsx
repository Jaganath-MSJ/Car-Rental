import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import Data from "../../data/data.json";
import CheckBox from "../CheckBox";

function CarFilters({ setShowFilters, selectedFilters, setSelectedFilters }) {
  const FilterName = Data.filters;
  const selectedCount = Object.values(selectedFilters).reduce((a, b) => {
    return b.length > 0 ? a + 1 : a;
  }, 0);
  return (
    <StyledCarFilters>
      <div className="closeFilters">
        <RxCross1 onClick={() => setShowFilters(false)} />
      </div>
      <div className="filterHeader">
        <h3>Filter By</h3>
        <p>
          {selectedCount} filters applied.&nbsp;
          <button
            onClick={() =>
              setSelectedFilters({
                "Car type": [],
                "Fuel type": [],
                "Gear type": [],
                Price: [],
                "Air Condition": [],
              })
            }
          >
            Clear All
          </button>
        </p>
      </div>
      {FilterName.map((filter) => {
        return (
          <div key={filter.filtername}>
            <div className="line" />
            <CheckBox
              currentFilter={filter}
              selectedFilters={selectedFilters[filter.filtername]}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
        );
      })}
    </StyledCarFilters>
  );
}

const StyledCarFilters = styled.section`
  background-color: #ffead0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  height: max-content;
  max-width: 15.5rem;
  min-width: 11rem;
  .closeFilters {
    display: none;
    @media screen and (max-width: 850px) {
      display: flex;
      justify-content: flex-end;
    }
  }
  .filterHeader {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.8rem 0;
    gap: 0.5rem;
    & > p {
      display: flex;
      justify-content: flex-end;
      & > button {
        background: transparent;
        border: none;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
  }
  .line {
    height: 0.5px;
    width: 100%;
    background-color: #161616;
  }
`;

export default CarFilters;
