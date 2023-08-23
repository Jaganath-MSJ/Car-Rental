import React from "react";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptionsError, toastOptionsSuccess } from "../utils/ToastOptions";
import { loginApi } from "../utils/handleApi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/userSlice";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (email === "" || password === "") {
    toast.error("Email or Password is required", toastOptionsError);
    return false;
  }
  try {
    const data = await loginApi({ email, password });
    if (data.status && data.accessToken) {
      toast.success(data.msg, toastOptionsSuccess);
      return data;
    } else if (!data.status) {
      toast.error(data.msg, toastOptionsError);
    } else {
      toast.error("Something went wrong!", toastOptionsError);
    }
  } catch (err) {
    console.log(err.message);
    toast.error("Something went wrong", toastOptionsError);
  }
  return null;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useActionData();
  if (data?.accessToken) {
    dispatch(setCurrentUser(data.accessToken));
    navigate("/");
  }
  return (
    <Cointainer>
      <div>
        <h1>Log in to your account</h1>
        <Form method="POST" replace>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
          />
          <button type="submit">Log in</button>
        </Form>
        <p>
          Don't have an account? <Link to="/register">Create one now</Link>
        </p>
        <ToastContainer />
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
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
