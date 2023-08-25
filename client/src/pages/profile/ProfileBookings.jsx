import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EachBooking from "../../components/profile/EachBooking";
import { getCurrentUser } from "../../features/userSlice";
import { selectRentalsByCustomerId } from "../../features/rentalSlice";

function ProfileBookings() {
  const { userId } = useSelector(getCurrentUser);
  const bookedCar = useSelector((state) =>
    selectRentalsByCustomerId(state, userId)
  );
  if (!bookedCar) return <div>Loading...</div>;
  return (
    <Cointainer>
      <h1>My Bookings</h1>
      <div>
        {bookedCar.map((bookedCar) => {
          return <EachBooking bookedCar={bookedCar} key={bookedCar.rentalId} />;
        })}
      </div>
    </Cointainer>
  );
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
  }
`;

export default ProfileBookings;
