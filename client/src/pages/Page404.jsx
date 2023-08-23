import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Page404() {
  return (
    <Container>
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/">Return to home</Link>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & > h1 {
    font-size: 3rem;
    text-align: center;
  }
  & > a {
    background-color: #161616;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    width: 20%;
    height: 2.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    a {
      width: 40%;
    }
  }
`;

export default Page404;
