import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function HostCarDetails() {
  const hostCar = useOutletContext();
  return (
    <Cointainer>
      <p>
        <span>Name:</span> {hostCar.carName}
      </p>
      <p>
        <span>Category:</span> {hostCar.category}
      </p>
      <p>
        <span>Description:</span> {hostCar.description}
      </p>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding-top: 1.5rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > p {
    text-align: justify;
    & > span {
      font-weight: bold;
    }
  }
`;

export default HostCarDetails;
