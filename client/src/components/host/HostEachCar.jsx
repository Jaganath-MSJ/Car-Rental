import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatDateTime1 } from "../../utils/DateFunction.js";
import { useSelector } from "react-redux";
import { selectRentalsById } from "../../features/rentalSlice.js";

function HostEachCar({ hostCar }) {
  const rentDetailsForCar = useSelector((state) =>
    selectRentalsById(state, hostCar.carId)
  );
  const isBooked = rentDetailsForCar.find(
    (car) => new Date(car.dropDate) > new Date()
  );
  return (
    <Article>
      <div className="details">
        <div className="carImage">
          <Link to={`/host/cars/${hostCar.carId}`}>
            <img
              src={hostCar.carPhotos[0]}
              alt={hostCar.carName}
              draggable="false"
            />
          </Link>
        </div>
        <div className="carName">
          <h4>{hostCar.carName}</h4>
          <p>{hostCar.carNumber}</p>
          <p>&#x20B9;{hostCar.rent}/day</p>
        </div>
      </div>
      <div className="other">
        <Link to={`/host/cars/${hostCar.carId}/edit`} className="btn-positive">
          Edit
        </Link>
        <p className="btn status">{isBooked ? "Booked" : "Available"}</p>
        <p>Posted on {formatDateTime1(hostCar.postedOn)}</p>
      </div>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  gap: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  justify-content: space-between;
  width: 100%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  .details {
    display: flex;
    gap: 0.5rem;
    .carImage {
      img {
        width: 13rem;
        height: 8rem;
        object-fit: cover;
        border-radius: 0.5rem;
        @media only screen and (max-width: 400px) {
          width: 10rem;
          height: 7rem;
        }
      }
    }
    .carName {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > h4 {
        font-size: 1.5rem;
      }
      & > p {
        font-size: 1.2rem;
      }
    }
  }
  .other {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.2rem;
    .status {
      border: 1px solid rgba(0, 0, 0, 0.3);
      color: var(--dark-color);
    }
  }
  @media only screen and (max-width: 570px) {
    flex-direction: column;
    .other {
      align-items: flex-start;
    }
  }
`;

export default HostEachCar;
