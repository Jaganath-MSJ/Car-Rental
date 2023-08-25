import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { selectCarById } from "../../features/carSlice";
import EachCar from "../../components/cars/EachCar";

function ProfileSavedCar() {
  const userInfo = useOutletContext();
  return (
    <Cointainer>
      <h1>My Saved Cars</h1>
      <div>
        {userInfo.savedCars.length === 0 && <p>No Saved Cars</p>}
        {userInfo.savedCars.length > 0 &&
          userInfo.savedCars.map((carId) => {
            return <Car carId={carId} key={carId} />;
          })}
      </div>
    </Cointainer>
  );
}

function Car({ carId }) {
  const car = useSelector((state) => selectCarById(state, carId));
  if (!car) return null;
  return <EachCar car={car} />;
}

const Cointainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h1 {
    text-align: center;
    text-transform: uppercase;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    & > p {
      margin: 0 auto;
    }
  }
`;

export default ProfileSavedCar;
