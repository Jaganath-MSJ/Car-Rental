import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Cointainer>
      <div>
        <h1>Log in to your account</h1>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
          />
          <button type="submit">Log in</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Create one now</Link>
        </p>
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  min-height: 82.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 20rem;
    height: max-content;
    & > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1rem;
      & > input {
        outline: none;
        width: 100%;
        color: #4d4d4d;
        padding: 0.5rem 0.8rem;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
      }
      & > button {
        background-color: #ff8c38;
        border: none;
        outline: none;
        width: 10rem;
        height: 2rem;
        font-size: 1.05rem;
        border-radius: 0.3rem;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #161616;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        }
      }
    }
    & > p {
      & > a {
        color: #ff8c38;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
  }
`;

export default Login;