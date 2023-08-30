import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BsGearFill, BsSpeedometer2 } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import CarCategory from "../../components/cars/CarCategory";
import { selectCarById } from "../../features/carSlice";
import { formatDateTime1 } from "../../utils/DateFunction";

function HostSingleCar() {
  const { hostCarId } = useParams();
  const hostCar = useSelector((state) => selectCarById(state, hostCarId));
  if (!hostCar) return <div>Loading...</div>;
  return (
    <Cointainer>
      <div className="backLink">
        <Link to="..">
          <GoArrowLeft />
          Back to all cars
        </Link>
      </div>
      <div className="carFullDetails">
        <section className="car">
          <div className="carImage">
            <img
              src={hostCar.carPhotos[0]}
              alt={hostCar.carName}
              draggable="false"
            />
          </div>
          <div className="carName">
            <div className="carType">
              <CarCategory category={hostCar.category} />
              <p className="fuel">{hostCar.fuelType}</p>
            </div>
            <div className="carName">
              <h2>{`${hostCar.carName} | ${hostCar.model}`}</h2>
            </div>
            <div className="carSmallDetails">
              <div>
                <MdOutlineAirlineSeatReclineNormal />
                <p>{`${hostCar.noOfSeats} seats`}</p>
              </div>
              <div>
                <BsGearFill />
                <p>{hostCar.gearType}</p>
              </div>
              <div>
                <BsSpeedometer2 />
                <p>{`${hostCar.mileage}km/hr`}</p>
              </div>
              <div>
                <TbAirConditioning />
                <p>{hostCar.airCondition ? "AC" : "Non-AC"} condition</p>
              </div>
            </div>
            <div className="carPrice">
              <p>
                <span>&#x20B9;{hostCar.rent}</span>/day
              </p>
              <p>Posted on {formatDateTime1(hostCar.postedOn)}</p>
            </div>
          </div>
        </section>
        <section className="other">
          <nav>
            <ul className="menuBar">
              <li>
                <NavLink to="" end>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink to="price">Price</NavLink>
              </li>
              <li>
                <NavLink to="photo">Photo</NavLink>
              </li>
              <li>
                <NavLink to="edit">Edit</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet context={hostCar} />
        </section>
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 0rem 1rem;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .backLink {
    padding-top: 1rem;
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
    padding: 1rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 2rem;
    background-color: white;
    border-radius: 0.3rem;
    .car {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: max-content;
      .carImage {
        & > img {
          width: 25rem;
          height: 15rem;
          border-radius: 0.3rem;
          @media only screen and (max-width: 900px) {
            width: 20rem;
            height: 12rem;
          }
          @media only screen and (max-width: 550px) {
            width: 12rem;
            height: 8rem;
          }
        }
      }
      .carName {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        .carType {
          display: flex;
          gap: 0.3rem;
          .fuel {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--dark-color);
            height: 2rem;
            width: 5.5rem;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 0.3rem;
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
        & > h2 {
          font-size: 1.7rem;
        }
        .carPrice {
          p span {
            font-weight: bold;
          }
        }
      }
    }
    .other {
      width: 100%;
      & > nav > ul {
        display: flex;
        gap: 2rem;
        padding: 0;
      }
    }
  }
  @media only screen and (max-width: 1180px) {
    .carFullDetails {
      flex-direction: column;
      & > section {
        width: 100%;
      }
    }
  }
`;

export default HostSingleCar;
