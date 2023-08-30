import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
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
          return <HostEachCar hostCar={car} key={car.carId} />;
        })}
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1.5rem 1rem;
  .headerCars {
    & > h2 {
      margin-bottom: 1rem;
      font-size: 1.7rem;
    }
  }
  .hostAllCars {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    & > article {
      width: 46%;
      @media only screen and (max-width: 1040px) {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export default HostCars;
