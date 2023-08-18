import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function HostCarDetails() {
  const car = useOutletContext();
  return (
    <Cointainer>
      <p>
        <span>Name:</span> {car.name}
      </p>
      <p>
        <span>Category:</span> {car.category}
      </p>
      <p>
        <span>Description:</span> {car.description}
      </p>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding-right: 2rem;
  & > p {
    text-align: justify;
    & > span {
      font-weight: bold;
    }
  }
`;

export default HostCarDetails;
