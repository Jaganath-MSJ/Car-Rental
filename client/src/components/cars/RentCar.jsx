import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  toastOptionsError,
  toastOptionsSuccess,
} from "../../utils/ToastOptions";
import { getCurrentUser, selectUserInfoById } from "../../features/userSlice";
import { SearchQuary } from "../../App";
import {
  calculateDaysBetweenDates,
  formatDate1,
  formatTime1,
} from "../../utils/DateFunction";
import { addRental } from "../../features/rentalSlice";

function RentCar({ onClose, price, hostUserId, carId }) {
  const { searchQuary } = useContext(SearchQuary);
  const { userId, accessToken } = useSelector(getCurrentUser);
  const hostInfo = useSelector((state) =>
    selectUserInfoById(state, hostUserId)
  );
  const totalDays = calculateDaysBetweenDates(
    searchQuary.startDate,
    searchQuary.endDate
  );
  const rentedAmount = totalDays * price;
  const dispatch = useDispatch();
  const handleRentCar = (e) => {
    e.preventDefault();
    try {
      dispatch(
        addRental({
          details: {
            carId: carId,
            customerId: userId,
            totalDays: totalDays,
            rentedAmount: rentedAmount,
            pickDate: searchQuary.startDate,
            dropDate: searchQuary.endDate,
            isDriverNeeded: searchQuary.needDriver,
          },
          token: accessToken,
        })
      );
      toast.success("Car rented successfully", toastOptionsSuccess);
    } catch (err) {
      toast.error("something went wrong", toastOptionsError);
    }
  };
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
            Email:&nbsp;
            <span>
              <a href={`mailto:${hostInfo.email}`}>{hostInfo.email}</a>
            </span>
          </p>
        </div>
        <p>
          Pick-up DateTime:&nbsp;
          <span>
            {formatDate1(searchQuary.startDate)}&nbsp;
            {formatTime1(searchQuary.startDate)}
          </span>
        </p>
        <p>
          Drop-off DateTime:&nbsp;
          <span>
            {formatDate1(searchQuary.endDate)}&nbsp;
            {formatTime1(searchQuary.endDate)}
          </span>
        </p>
        <p>
          Need a driver? <span>{searchQuary.needDriver ? "Yes" : "No"}</span>
        </p>
        <p>
          Rent: <span>&#x20B9;{price}/day</span>
        </p>
        <p>
          No.of days: <span>{totalDays}</span>
        </p>
        <p>
          Total Amount to be paid: <span>&#x20B9;{rentedAmount}</span>
        </p>
        <p>By confirming the rent the request will se sent to the owner</p>
        <div className="btn">
          <button onClick={handleRentCar}>Confirm</button>
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
