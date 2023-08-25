import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import {
  AiFillStar,
  AiFillSafetyCertificate,
  AiFillRead,
} from "react-icons/ai";
import {
  MdOutlineAirlineSeatReclineNormal,
  MdPrivateConnectivity,
  MdFreeCancellation,
  MdOutlineSummarize,
} from "react-icons/md";
import { BsGearFill, BsSpeedometer2 } from "react-icons/bs";
import { TbAirConditioning, TbCashBanknoteOff } from "react-icons/tb";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import CarCategory from "../../components/cars/CarCategory";
import { formatDate1 } from "../../utils/DateFunction";
import CancelPolicy from "../../components/cars/CancelPolicy";
import PriceSummary from "../../components/cars/PriceSummary";
import RentCar from "../../components/cars/RentCar";
import { selectCarById } from "../../features/carSlice";
import { getCurrentUser, selectUserNameById } from "../../features/userSlice";
import { SearchQuary } from "../../App";
import { selectRentalsByCustomerId } from "../../features/rentalSlice";

function CarDetails() {
  const { searchQuary } = useContext(SearchQuary);
  const { carId } = useParams();
  const car = useSelector((state) => selectCarById(state, carId));
  const { userId } = useSelector(getCurrentUser);
  const currentUserRental = useSelector((state) =>
    selectRentalsByCustomerId(state, userId)
  );
  const isCarRented = currentUserRental.find(
    (rental) => rental.carId === carId
  );

  const [coupanCollased, setCoupanCollased] = useState(true);
  const [showCancelPolicy, setShowCancelPolicy] = useState(false);
  const [coupanCode, setCoupanCode] = useState("");
  const [showFareSummary, setShowFareSummary] = useState(false);
  const [showRentCar, setShowRentCar] = useState(false);

  if (!car) return <div>Loading...</div>;
  return (
    <Container>
      <div className="backLink">
        <Link to="..">
          <GoArrowLeft />
          Back to all cars
        </Link>
      </div>
      <div className="carFullDetails">
        <section className="details">
          <div className="carHeader">
            <div className="carImage">
              <img
                src={car?.carPhotos[0]}
                alt={car.carName}
                draggable="false"
              />
            </div>
            <div className="carDetails">
              <div className="carType">
                <CarCategory category={car.category} />
                <p className="fuel">{car.fuelType}</p>
                <p className="pick">{"Top"}</p>
              </div>
              <div className="carName">
                <h2>
                  {car.carName} | {car.model}
                </h2>
              </div>
              <div className="carSmallDetails">
                <div>
                  <MdOutlineAirlineSeatReclineNormal />
                  <p>{`${car.noOfSeats} seats`}</p>
                </div>
                <div>
                  <BsGearFill />
                  <p>{car.gearType}</p>
                </div>
                <div>
                  <BsSpeedometer2 />
                  <p>{`${car.mileage}km/hr`}</p>
                </div>
                <div>
                  <TbAirConditioning />
                  <p>{car.airCondition ? "AC" : "Non-AC"} condition</p>
                </div>
              </div>
              <div className="carPrice">
                <p>&#x20B9;{car.rent}/day</p>
              </div>
              <button className="morePhotos">See more photos</button>
            </div>
          </div>
          <div className="carDescription">
            <p>{car.description}</p>
          </div>
          <div className="addedBenefits">
            <h4>Added Benefits</h4>
            <div>
              <article>
                <h5>
                  <AiFillSafetyCertificate /> Safety First
                </h5>
                <p>
                  Our experts have reigorously examined this car throught a 20
                  step safety check, ensuring a worty free trip ahead.
                </p>
              </article>
              <article>
                <h5>
                  <TbCashBanknoteOff /> No Extra Target
                </h5>
                <p>
                  We've got you covered. No security deposit, unlimited
                  kilometers, rodeside help, and trip protection included.
                </p>
              </article>
              <article>
                <h5>
                  <MdPrivateConnectivity /> 100% Private
                </h5>
                <p>
                  Embrace a new way to travel and drive with freedom,
                  flexibility, and your own space, just like your personal car!
                </p>
              </article>
            </div>
          </div>
          {car.reviews.length > 0 && (
            <div className="carReviews">
              <h4>Reviews</h4>
              <div>
                {car.reviews.map((review) => {
                  return <EachReview review={review} key={review.reviewedOn} />;
                })}
              </div>
            </div>
          )}
          <div className="cancellation">
            <div className="cancelHeader">
              <h4>Cancellation Policy</h4>
              <p>
                <AiFillRead
                  onClick={() => setShowCancelPolicy(!showCancelPolicy)}
                />
                &nbsp;View Policy
              </p>
            </div>
            <div className="cancelDetails">
              <h5>
                <MdFreeCancellation /> Free Cancellation
              </h5>
              <p>Zero cancellation see till 24 hours before pick up</p>
              <p>Quick refund after cancellation</p>
            </div>
          </div>
        </section>
        <div className="rentCar">
          <div className="couponCode">
            <div>
              <h4>Coupon Code</h4>
              <button onClick={() => setCoupanCollased(!coupanCollased)}>
                {coupanCollased ? <FaAngleLeft /> : <FaAngleDown />}
              </button>
            </div>
            {!coupanCollased && (
              <input
                type="text"
                name="coupon"
                placeholder="Enter Coupon"
                value={coupanCode}
                onChange={(e) => setCoupanCode(e.target.value)}
              />
            )}
          </div>
          <div className="rentDetails">
            <p>Please review the final fare</p>
            <div>
              <h4>&#x20B9;{car.rent}</h4>
              <p>
                Fare Summary&nbsp;
                <MdOutlineSummarize
                  onClick={() => setShowFareSummary(!showFareSummary)}
                />
              </p>
            </div>
            {(!searchQuary.startDate || !searchQuary.endDate) &&
              !isCarRented && (
                <p className="error">
                  Please select <Link to="/cars">pick-up and drop-off</Link>{" "}
                  date to continue
                </p>
              )}
            {!isCarRented && (
              <button
                disabled={!searchQuary.startDate || !searchQuary.endDate}
                style={{
                  cursor:
                    !searchQuary.startDate || !searchQuary.endDate
                      ? "not-allowed"
                      : "pointer",
                }}
                onClick={() => setShowRentCar(!showRentCar)}
              >
                Continue
              </button>
            )}
            {isCarRented && <p className="error">Your car is already rented</p>}
          </div>
        </div>
      </div>
      {showCancelPolicy && <CancelPolicy onClose={setShowCancelPolicy} />}
      {showFareSummary && (
        <PriceSummary
          onClose={setShowFareSummary}
          rentCar={setShowRentCar}
          price={Number(car.rent)}
          isCarRented={isCarRented}
        />
      )}
      {showRentCar && (
        <RentCar
          onClose={setShowRentCar}
          price={Number(car.rent) + 399 + 99}
          hostUserId={car.userId}
          carId={car.carId}
        />
      )}
    </Container>
  );
}

function EachReview({ review }) {
  const reviewerName = useSelector((state) =>
    selectUserNameById(state, review.userId)
  );
  return (
    <article>
      <div className="reviewStar">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <AiFillStar
              key={star}
              className={star <= review?.rating ? "rated" : ""}
            />
          );
        })}
      </div>
      <div className="reviewedBy">
        {reviewerName}
        <span>{formatDate1(review.reviewedOn)}</span>
      </div>
      <div className="reviewDesc">{review.comment}</div>
    </article>
  );
}

const Container = styled.section`
  padding: 0 1rem;
  .backLink {
    & > a {
      display: flex;
      gap: 0.5rem;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.1rem;
      }
    }
  }
  .carFullDetails {
    display: flex;
    margin-top: 1rem;
    gap: 1rem;
    .details {
      border: 1px solid #161616;
      border-radius: 0.3rem;
      height: 71vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      .carHeader {
        display: flex;
        gap: 1rem 2rem;
        .carImage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          & > img {
            width: 20rem;
            height: 12rem;
            border-radius: 0.5rem;
            object-fit: cover;
          }
        }
        .carDetails {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 0.2rem;
          .carType {
            display: flex;
            gap: 0.3rem;
            .fuel,
            .pick {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 2rem;
              border-radius: 0.3rem;
              color: #ffead0;
            }
            .fuel {
              width: 5rem;
              background-color: green;
            }
            .pick {
              width: 5.5rem;
              background-color: blue;
            }
          }
          .carName {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .carSmallDetails {
            display: grid;
            grid-template-columns: 50% 50%;
            gap: 0.7rem 0.5rem;
            & > div {
              display: flex;
              gap: 0.3rem;
            }
          }
          .carPrice {
            display: flex;
            justify-content: space-between;
            & > p {
              display: flex;
              flex-direction: column;
              font-size: 1.1rem;
              font-weight: bold;
            }
          }
          .morePhotos {
            background-color: dodgerblue;
            width: 9rem;
            height: 2rem;
            border-radius: 0.3rem;
            border: none;
            outline: none;
            cursor: pointer;
          }
        }
        @media only screen and (max-width: 700px) {
          flex-direction: column;
          .carImage > img {
            width: 18rem;
            height: 10rem;
          }
        }
      }
      .carDescription {
        & > p {
          text-align: justify;
        }
      }
      .addedBenefits {
        & > div {
          margin-top: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          & > article {
            border: 1px solid #161616;
            border-radius: 0.3rem;
            padding: 0.5rem;
            display: flex;
            width: 15rem;
            flex-direction: column;
            gap: 0.5rem;
            & > p {
              text-align: justify;
            }
          }
        }
      }
      .carReviews {
        & > div {
          margin-top: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          & > article {
            display: flex;
            flex-direction: column;
            border: 1px solid #161616;
            border-radius: 0.3rem;
            padding: 0.5rem;
            width: 15rem;
            gap: 0.5rem;
            .reviewStar {
              svg {
                font-size: 1.1rem;
              }
              .rated {
                color: #ff8c38;
              }
            }
            .reviewedBy {
              display: flex;
              gap: 0.3rem;
              & > span {
                color: #8c8c8c;
              }
            }
            .reviewDesc {
              text-align: justify;
            }
          }
        }
      }
      .cancellation {
        .cancelHeader {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          & > p > svg {
            cursor: pointer;
          }
        }
        .cancelDetails {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }
    .rentCar {
      max-width: 30rem;
      min-width: 18rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .couponCode {
        border: 1px solid #161616;
        border-radius: 0.3rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        & > div {
          display: flex;
          justify-content: space-between;
          & > button {
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
          }
        }
        & > input {
          width: 95%;
          height: 1.1rem;
          padding: 0.3rem;
          border: 1px solid #161616;
          border-radius: 0.3rem;
          outline: none;
        }
      }
      .rentDetails {
        border: 1px solid #161616;
        border-radius: 0.3rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        & > div {
          display: flex;
          justify-content: space-between;
        }
        .error {
          display: inline;
          text-align: center;
          & > a {
            color: #ff8c38;
            &:hover {
              text-decoration: underline;
              text-underline-offset: 0.2rem;
            }
          }
        }
        & > button {
          align-self: center;
          background-color: #e17654;
          border: none;
          outline: none;
          color: #fff7ed;
          border-radius: 0.3rem;
          padding: 0.3rem 0.5rem;
          font-size: 1rem;
          cursor: pointer;
        }
      }
    }
    @media only screen and (max-width: 1010px) {
      flex-direction: column;
      padding-bottom: 1rem;
      .details {
        height: max-content;
        overflow: visible;
      }
      .rentCar {
        width: 20rem;
      }
    }
  }
`;

export default CarDetails;
