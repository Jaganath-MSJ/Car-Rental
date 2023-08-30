import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../features/userSlice";
import { selectCarsByUserId } from "../../features/carSlice";
import EachReview from "../../components/cars/EachReview";

function HostReview() {
  const { userId } = useSelector(getCurrentUser);
  const hostCars = useSelector((state) => selectCarsByUserId(state, userId));
  const [selectedCarId, setSelectedCarId] = useState(hostCars[0]?.carId);
  if (!selectedCarId) return <div>Loading...</div>;
  const selectedCar = hostCars.find((car) => car?.carId === selectedCarId);
  const reviewLength = selectedCar.reviews.length;
  const ratingCounts = new Array(5).fill(0);
  selectedCar.reviews.forEach((review) => {
    ratingCounts[review.rating] = (ratingCounts[review.rating] || 0) + 1;
  });
  return (
    <Cointainer>
      <h1>Reviews for cars</h1>
      <div>
        <div className="reviewCars">
          {hostCars.map((car) => {
            return (
              <article
                key={car.carId}
                onClick={() => setSelectedCarId(car.carId)}
                className={selectedCarId === car.carId ? "active" : ""}
              >
                <div className="reviewCarImg">
                  <img src={car.carPhotos[0]} alt={car.carName} />
                </div>
                <div className="reviewCarDetails">
                  <h3>{car.carName}</h3>
                  <p>{car.carNumber}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="reviewDetails">
          <div className="header">
            <div className="starHeader">
              <h2>
                {selectedCar.reviews.reduce((a, b) => b.rating + a, 0) /
                  reviewLength || 0}
              </h2>
              <p>
                <AiFillStar />
                overall rating
              </p>
            </div>
            <div className="stars">
              {[5, 4, 3, 2, 1].map((star) => {
                return (
                  <RatingBar
                    totalRatings={100}
                    starCount={(ratingCounts[star] / reviewLength) * 100}
                    star={star}
                  />
                );
              })}
            </div>
          </div>
          <div className="review">
            <div className="reviewHeader">
              <h2>Reviews {`(${reviewLength})`}</h2>
            </div>
            <div className="allReviews">
              {selectedCar.reviews.map((review) => {
                return <EachReview review={review} key={review.reviewOn} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Cointainer>
  );
}

function RatingBar({ totalRatings, starCount, star }) {
  const percentage = (starCount / totalRatings) * 100;
  return (
    <article>
      <p>{star} stars</p>
      <div className="rating-bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
        <div className="empty" style={{ width: `${100 - percentage}%` }}></div>
      </div>
      <p>{starCount}%</p>
    </article>
  );
}

const Cointainer = styled.section`
  padding: 1.5rem 1rem;
  & > div {
    display: flex;
    gap: 1rem;
    .reviewCars {
      width: 20rem;
      display: flex;
      flex-direction: column;
      height: 30.5rem;
      overflow-y: auto;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid rgba(22, 22, 22, 0.5);
      border-radius: 0.3rem;
      & > article {
        display: flex;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.3rem;
        background-color: white;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &.active {
          background-color: lightgray;
          transform: scale(1.02);
        }
        .reviewCarImg {
          img {
            width: 5rem;
            height: 3rem;
            border-radius: 0.3rem;
          }
        }
        .reviewCarDetails {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-content: center;
        }
      }
    }
    .reviewDetails {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      padding: 1rem;
      border: 1px solid rgba(22, 22, 22, 0.5);
      border-radius: 0.3rem;
      .header {
        .starHeader {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          & > p > svg {
            color: #ff8c38;
          }
        }
        .stars {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          & > article {
            display: flex;
            align-items: center;
            gap: 1rem;
            .rating-bar {
              width: 70%;
              display: flex;
              height: 8px;
              background-color: #ddd;
              border-radius: 11rem;
              overflow: hidden;
              .filled {
                background-color: #ff8c38;
              }
              .empty {
                background-color: #b9b9b9;
              }
              @media only screen and (max-width: 670px) {
                width: 55%;
              }
            }
          }
        }
      }
      .review {
        .allReviews {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          max-height: 30.5rem;
          overflow-y: auto;
        }
      }
      @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }
    @media only screen and (max-width: 670px) {
      flex-direction: column;
      .reviewCars {
        width: 91%;
      }
    }
  }
`;

export default HostReview;
