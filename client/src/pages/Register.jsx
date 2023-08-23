import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptionsError, toastOptionsSuccess } from "../utils/ToastOptions";
import { registerApi } from "../utils/handleApi";

export async function registerAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const city = formData.get("city");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  if (name.trim().length < 3) {
    toast.error("Name must be at least 3 characters long", toastOptionsError);
    return false;
  } else if (email === "") {
    toast.error("Name must be at least 3 characters long", toastOptionsError);
    return false;
  } else if (phone === "") {
    toast.error("Phone no is required", toastOptionsError);
    return false;
  } else if (city.trim() === "") {
    toast.error("City is required", toastOptionsError);
    return false;
  } else if (password.length < 8) {
    toast.error(
      "Password must be at least 8 characters long",
      toastOptionsError
    );
    return false;
  } else if (password !== confirmPassword) {
    toast.error(
      "Password do not match with Confirm Password",
      toastOptionsError
    );
    return false;
  }
  try {
    const data = await registerApi({ name, email, phone, city, password });
    if (data.status) {
      toast.success(data.msg, toastOptionsSuccess);
      return redirect("/login");
    } else {
      toast.error(data.msg, toastOptionsError);
    }
  } catch (err) {
    toast.error("Something went wrong", toastOptionsError);
  }

  return null;
}

function Regsiter() {
  return (
    <Cointainer>
      <div>
        <h1>Create your account</h1>
        <Form method="POST" replace>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone no"
            autoComplete="phone"
          />
          <input
            type="text"
            name="city"
            placeholder="City/Town"
            autoComplete="password"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="password"
          />
          <button type="submit">Create Account</button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
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

export default Regsiter;
