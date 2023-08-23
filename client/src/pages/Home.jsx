import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <h1>You got the travel plans, we get the travel cars.</h1>
      <div className="inputDate">
        <div>
          <label>From Date</label>
          <input type="date" />
        </div>
        <div>
          <label>To Date</label>
          <input type="date" />
        </div>
      </div>
      <p>
        Add adventure to your life by joining the car movement. Rent the perfect
        car to make your perfect road trip.
      </p>
      <Link to="/cars">Find your car</Link>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.7rem;
  align-items: center;
  color: white;
  & > h1 {
    font-size: 3rem;
    text-align: center;
  }
  .inputDate {
    display: flex;
    gap: 2rem;
    & > div {
      display: flex;
      gap: 0.5rem;
      & > input {
        padding: 0.2rem 0.4rem;
        border-radius: 0.2rem;
        border: 1px solid #c2c2c2;
        outline: none;
      }
    }
  }
  & > p {
    font-size: 1.2rem;
    text-align: center;
  }
  & > a {
    color: white;
    background-color: #ff8c38;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    width: 20%;
    height: 2.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #161616;
    }
  }
  @media only screen and (max-width: 600px) {
    & > h1 {
      font-size: 2rem;
    }
    & > p {
      font-size: 1rem;
    }
    & > a {
      width: 40%;
    }
    .inputDate {
      flex-direction: column;
    }
  }
`;

export default Home;
