import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import Data from "../../data/data.json";
import CheckBox from "../CheckBox";

function CarFilters({setShowFilters}) {
  const FilterName = Data.filters;
  return (
    <StyledCarFilters>
      <div className="closeFilters">
        <RxCross1 onClick={() => setShowFilters(false)} />
      </div>
      <div className="filterHeader">
        <h3>Filter By</h3>
        <p>
          {1} filters applied.&nbsp;
          <button>Clear All</button>
        </p>
      </div>
      <div className="line" />
      <CheckBox
        name={FilterName[0]}
        // filters={location}
        // setFilters={setLocation}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[1]}
        // filters={company}
        // setFilters={setCompany}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[2]}
        // filters={jobSource}
        // setFilters={setJobSource}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[3]}
        // filters={experience}
        // setFilters={setExperience}
      />
      <div className="line" />
      <CheckBox
        name={FilterName[4]}
        // filters={education}
        // setFilters={setEducation}
      />
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
    & > h3 {
      margin: 0;
    }
    & > p {
      margin: 0;
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
