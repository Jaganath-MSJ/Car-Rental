import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

function HostNav() {
  return (
    <Cointainer>
      <nav>
        <ul>
          <li>
            <NavLink to="" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="income">Income</NavLink>
          </li>
          <li>
            <NavLink to="cars">Cars</NavLink>
          </li>
          <li>
            <NavLink to="review">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="addCar">Add Car</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 0 1.5rem;
  & > nav {
    & > ul {
      display: flex;
      gap: 1.5rem;
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
    & > section {
      min-height: 70vh;
    }
  }
  @media only screen and (max-width: 420px) {
    padding: 0 1rem;
    & > nav > ul {
      gap: 0.5rem;
    }
  }
`;

export default HostNav;
