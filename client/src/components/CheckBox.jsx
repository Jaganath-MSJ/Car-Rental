import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

function CheckBox({ name, filters, setFilters }) {
  const [collased, setCollased] = useState(false);

  const handleCheckBox = (e) => {
    // const exist = filters.find((key) => (key===e.target.value));
    // if(exist) {
    //   const removed = filters.filter((key) => key!==e.target.value);
    //   setFilters(removed)
    // } else {
    //   setFilters([...filters, e.target.value])
    // }
  };

  return (
    <StyledCheckBox>
      <div className="checkHeader">
        <h4>{name.filtername}</h4>
        <button onClick={() => setCollased(!collased)}>
          {collased ? <FaAngleLeft /> : <FaAngleDown />}
        </button>
      </div>
      <div className="allBoxs">
        {!collased &&
          name.types.map((filter) => {
            return (
              <div className="box" key={filter.id}>
                <input
                  type="checkBox"
                  // checked={filters.find((key) => (key===filter.key))}
                  // value={filter.key}
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
    & > h4 {
      margin: 0;
    }
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
      & > p {
        margin: 0;
      }
    }
  }
`;

export default CheckBox;
