import React from "react";
import styled from "styled-components";
import Data from "../../data/data.json";
import { Link } from "react-router-dom";
import HostEachCar from "../../components/host/HostEachCar";

function HostCars() {
  return (
    <Cointainer>
      <div className="headerCars">
        <h2>Your listed cars</h2>
      </div>
      <div className="hostAllCars">
        {Data.cars.slice(0, 6).map((car, index) => {
          return (
            <Link to={`/host/cars/${index}`} key={index}>
              <HostEachCar hostCar={car} index={index} key={index} />
            </Link>
          );
        })}
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem;
  min-height: 71.2vh;
  .headerCars {
    & > h2 {
      margin: 0;
      margin-bottom: 1rem;
      font-size: 1.7rem;
    }
  }
  .hostAllCars {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export default HostCars;
