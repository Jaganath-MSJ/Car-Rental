import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HostEachCar from "../../components/host/HostEachCar";
import { getCurrentUser } from "../../features/userSlice";
import { selectCarsByUserId } from "../../features/carSlice";

function HostCars() {
  const { userId } = useSelector(getCurrentUser);
  const hostCars = useSelector((state) => selectCarsByUserId(state, userId));
  return (
    <Cointainer>
      <div className="headerCars">
        <h2>Your listed cars</h2>
      </div>
      <div className="hostAllCars">
        {hostCars.map((car) => {
          return (
            <Link to={`/host/cars/${car.carId}`} key={car.carId}>
              <HostEachCar hostCar={car} />
            </Link>
          );
        })}
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem;
  min-height: 71vh;
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
