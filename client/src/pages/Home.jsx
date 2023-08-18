import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <h1>You got the travel plans, we get the travel cars.</h1>
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
  min-height: 82.3vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  & > h1 {
    font-size: 3rem;
    text-align: center;
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
  }
`;

export default Home;