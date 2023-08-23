import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <div className="aboutImg">
        <img src="/assets/about.jpg" alt="about" draggable="false" />
      </div>
      <div>
        <div className="aboutDetails">
          <h1>Don’t squeeze in a sedan when you could relax in a car.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel car
            rental. Our cars are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="aboutOther">
          <h2>Your destination is waiting. Your car is ready.</h2>
          <Link to="/cars">Explore our cars</Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  /* padding: 1.3rem 0; */
  .aboutImg {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    & > img {
      height: 15rem;
      width: 30.2rem;
      border-radius: 0.3rem;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    .aboutDetails {
      & > h1 {
        font-size: 2rem;
        text-align: justify;
      }
      & > p {
        text-align: justify;
      }
    }
    .aboutOther {
      background-color: #ffcc8d;
      border-radius: 0.2rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      & > h2 {
        margin: 0;
        text-align: justify;
      }
      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #161616;
        border-radius: 0.3rem;
        color: white;
        width: 9rem;
        height: 2.5rem;
        transition: all 0.2s ease-in-out;
        &:hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .aboutImg {
      & > img {
        height: 12rem;
        width: 109%;
      }
    }
  }
`;

export default About;
