import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import CarCategory from "../../components/cars/CarCategory";
import { selectCarById } from "../../features/carSlice";

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
            <h2>{hostCar.carName}</h2>
            <CarCategory category={hostCar.category} />
          </div>
        </section>
        <section className="other">
          <nav>
            <ul>
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
            width: 10rem;
            height: 8rem;
          }
        }
      }
      .carName {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        & > h2 {
          font-size: 1.7rem;
        }
      }
    }
    .other {
      width: 100%;
      & > nav > ul {
        display: flex;
        gap: 2rem;
        padding: 0;
        & > li {
          list-style: none;
          & > a {
            color: #4d4d4d;
            transition: all 0.3s ease-in-out;
          }
          & > a:hover,
          .active {
            color: #161616;
            font-weight: bold;
            text-decoration: underline;
            text-underline-offset: 0.2rem;
          }
        }
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
