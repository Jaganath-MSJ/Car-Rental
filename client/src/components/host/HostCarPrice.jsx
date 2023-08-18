import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function HostCarPrice() {
  const car = useOutletContext();

  return (
    <Cointainer>
      <p>
        <span>${car.price}</span>/day
      </p>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding-right: 2rem;
  & > p {
    margin: 0;
    font-size: 1.4rem;
    & > span {
      font-weight: bold;
    }
  }
`;

export default HostCarPrice;
