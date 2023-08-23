import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUserInfoById } from "../../features/userSlice";

function RentCar({ onClose, price, hostUserId }) {
  const hostInfo = useSelector((state) =>
    selectUserInfoById(state, hostUserId)
  );
  return (
    <PopUp>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        <h2>Rent this Car</h2>
        <div className="ownerDetails">
          <h4>Owner Info</h4>
          <p>Connect with owner if you have any queries</p>
          <p>
            Name: <span>{hostInfo.name}</span>
          </p>
          <p>
            Phone: <span>{hostInfo.phone}</span>
          </p>
          <p>
            Email: <span>{hostInfo.email}</span>
          </p>
        </div>
        <p>
          Pick-up DateTime: <span>15-08-2023 11:30AM</span>
        </p>
        <p>
          Drop-off DateTime: <span>16-08-2023 06:30AM</span>
        </p>
        <p>
          Need a driver? <span>Yes</span>
        </p>
        <p>
          Rent: <span>&#x20B9;{price}/day</span>
        </p>
        <p>
          No.of days: <span>2</span>
        </p>
        <p>
          Total Amount to be paid: <span>&#x20B9;{price * 2}</span>
        </p>
        <p>By confirming the rent the request will se sent to the owner</p>
        <div className="btn">
          <button>Confirm</button>
        </div>
      </div>
    </PopUp>
  );
}

const PopUp = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    width: max-content;
    height: max-content;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        color: red;
      }
    }
    & > h2 {
      margin-bottom: 0.8rem;
    }
    .ownerDetails {
      border: 1px solid #161616;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > h4 {
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      & > button {
        background-color: #e17654;
        border: none;
        outline: none;
        color: #fff7ed;
        font-size: 1.1rem;
        border-radius: 0.3rem;
        padding: 0.3rem 0.8rem;
        cursor: pointer;
      }
    }
  }
`;
export default RentCar;
