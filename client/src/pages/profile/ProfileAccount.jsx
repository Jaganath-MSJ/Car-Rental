import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  toastOptionsError,
  toastOptionsSuccess,
} from "../../utils/ToastOptions";
import { getCurrentUser, updateUserInfo } from "../../features/userSlice";

function ProfileAccount() {
  const userInfo = useOutletContext();
  const [user, setUser] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    city: userInfo.city,
    gender: userInfo.gender,
  });
  const dispatch = useDispatch();
  const { accessToken } = useSelector(getCurrentUser);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    try {
      dispatch(
        updateUserInfo({
          details: { userId: userInfo.userId, ...user },
          token: accessToken,
        })
      );
      toast.success("Profile updated successfully", toastOptionsSuccess);
    } catch (err) {
      toast.error("something went wrong", toastOptionsError);
    }
  };
  return (
    <Cointainer>
      <h1>My Account</h1>
      <form onSubmit={handleUpdateUserInfo}>
        <div>
          <h3>Account Details</h3>
          <div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mobile</label>
              <input
                type="text"
                name="phone"
                placeholder="Mobile no"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <h3>Personal Details</h3>
          <div>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Gender</label>
              <select name="gender" value={user.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h3>Location Details</h3>
          <p>Please share your location for better experience</p>
          <div>
            <div>
              <label>Location</label>
              <input
                type="text"
                name="city"
                placeholder="Location"
                value={user.city}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h1 {
    text-align: center;
    text-transform: uppercase;
  }
  & > form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        padding-bottom: 0.5rem;
        border-bottom: 1px dotted #161616;
      }
      & > div {
        display: flex;
        gap: 1.5rem;
        width: 100%;
        & > div {
          width: 20rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          & > input,
          & > select {
            outline: none;
            color: #4d4d4d;
            font-size: 0.9rem;
            padding: 0.3rem 0.8rem;
            border: 1px solid #c2c2c2;
            border-radius: 0.2rem;
          }
          & > select {
            width: 12.5rem;
          }
        }
        @media only screen and (max-width: 950px) {
          flex-direction: column;
        }
      }
      button {
        background-color: #ff8c38;
        color: #fff7ed;
        padding: 0.3rem 0.8rem;
        border-radius: 0.3rem;
        font-size: 1rem;
        width: max-content;
        align-self: center;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
          color: #161616;
        }
      }
    }
  }
`;

export default ProfileAccount;
