import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectCarById } from "../../features/carSlice";
import { getCurrentUser } from "../../features/userSlice";
import { formatDateTime1 } from "../../utils/DateFunction";
import ReviewCar from "./ReviewCar";

function EachBooking({ bookedCar }) {
  const [showAddReview, setShowAddReview] = useState(false);
  const { userId } = useSelector(getCurrentUser);
  const car = useSelector((state) => selectCarById(state, bookedCar.carId));
  const isBooked = new Date(bookedCar.pickupDate) > new Date();
  const isActive = new Date(bookedCar.dropDate) > new Date();
  if (!car) return <div>Loading...</div>;
  const isReviewAdded = car.reviews.find((review) => review.userId === userId);
  return (
    <Article>
      <div className="bookHeader">
        <div className="car">
          <div className="carImage">
            <Link to={`/cars/${car.carId}`}>
              <img src={car.carPhotos[0]} alt={car.carName} draggable="false" />
            </Link>
          </div>
          <div className="carDetails">
            <h3>{car.carName}</h3>
            <p>{car.carNumber}</p>
            <p>&#x20B9;{bookedCar.rentedAmount}</p>
          </div>
        </div>
        <div className="travelDate">
          <p className="status">
            Status:&nbsp;
            <span>
              {isBooked ? "Booked" : isActive ? "Active" : "Completed"}
            </span>
          </p>
          <p>
            Pick-up: <span>{formatDateTime1(bookedCar.pickDate)}</span>
          </p>
          <p>
            Drop-off: <span>{formatDateTime1(bookedCar.dropDate)}</span>
          </p>
        </div>
      </div>
      <div className="bookDetails">
        <p className="bookedOn">
          Booked on&nbsp;
          {formatDateTime1(bookedCar.rentedOn)}
        </p>
        {!isActive && !isReviewAdded && (
          <button
            className="reviewBtn"
            onClick={() => setShowAddReview(!showAddReview)}
          >
            Add Review
          </button>
        )}
        {isReviewAdded && <button className="reviewBtn">Review Added</button>}
        {isBooked && <button className="cancelBtn">Cancel Booking</button>}
      </div>
      {showAddReview && (
        <ReviewCar onClose={setShowAddReview} carId={car.carId} />
      )}
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #161616;
  border-radius: 0.3rem;
  width: 100%;
  .bookHeader {
    display: flex;
    justify-content: space-between;
    .car {
      display: flex;
      gap: 1rem;
      .carImage {
        img {
          width: 10rem;
          height: 6rem;
          object-fit: cover;
          border-radius: 0.3rem;
        }
      }
      .carDetails {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
    }
    .travelDate {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      .status {
        span {
          background-color: green;
          color: #fff7ed;
          padding: 0.3rem 0.5rem;
          border-radius: 0.3rem;
          border: none;
          outline: none;
        }
      }
    }
  }
  .bookDetails {
    display: flex;
    justify-content: space-between;
    .reviewBtn,
    .cancelBtn {
      background-color: #ff8c38;
      color: #fff7ed;
      padding: 0.3rem 0.5rem;
      border-radius: 0.3rem;
      border: none;
      outline: none;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        color: #161616;
      }
    }
  }
`;

export default EachBooking;
