import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

function CheckBox({ currentFilter, selectedFilters, setSelectedFilters }) {
  const [collased, setCollased] = useState(false);

  const handleCheckBox = (e) => {
    const exist = selectedFilters.includes(e.target.value);
    if (exist) {
      const removed = selectedFilters.filter((key) => key !== e.target.value);
      setSelectedFilters((prevData) => ({
        ...prevData,
        [currentFilter.filtername]: removed,
      }));
    } else {
      setSelectedFilters((prevData) => ({
        ...prevData,
        [currentFilter.filtername]: [
          ...prevData[currentFilter.filtername],
          e.target.value,
        ],
      }));
    }
  };

  return (
    <StyledCheckBox>
      <div className="checkHeader">
        <h4>{currentFilter.filtername}</h4>
        <button onClick={() => setCollased(!collased)}>
          {collased ? <FaAngleLeft /> : <FaAngleDown />}
        </button>
      </div>
      <div className="allBoxs">
        {!collased &&
          currentFilter.types.map((filter) => {
            return (
              <div className="box" key={filter.id}>
                <input
                  type="checkBox"
                  checked={selectedFilters.includes(filter.value)}
                  value={filter.value}
                  onChange={handleCheckBox}
                />
                &nbsp;
                <p>{filter.name}</p>
              </div>
            );
          })}
      </div>
    </StyledCheckBox>
  );
}

const StyledCheckBox = styled.div`
  .checkHeader {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    & > button {
      background: transparent;
      border: none;
    }
  }
  .allBoxs {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    .box {
      display: flex;
      transition: all 0.3s ease-in-out;
      & > input {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
        cursor: pointer;
      }
    }
  }
`;

export default CheckBox;
