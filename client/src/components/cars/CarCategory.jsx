import React from "react";
import styled from "styled-components";

function CarCategory({ category }) {
  return <Category className={category}>{category}</Category>;
}

const Category = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 6.5rem;
  height: 2rem;
  border-radius: 0.3rem;
  color: #ffead0;
  &.Hatchback {
    background-color: #e17654;
  }
  &.Sedan {
    background-color: #161616;
  }
  &.MPV {
    background-color: #115e59;
  }
`;

export default CarCategory;
