import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  toastOptionsError,
  toastOptionsSuccess,
} from "../../utils/ToastOptions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../features/userSlice";
import { addCarReview } from "../../features/carSlice";

function ReviewCar({ onClose, carId }) {
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });
  const dispatch = useDispatch();
  const { userId, accessToken } = useSelector(getCurrentUser);
  const handleAddReview = (e) => {
    e.preventDefault();
    try {
      dispatch(
        addCarReview({
          details: { carId, userId, ...review },
          token: accessToken,
        })
      );
      toast.success("Review added successfully", toastOptionsSuccess);
      onClose(false);
    } catch (error) {
      toast.error("Something went wrong", toastOptionsError);
    }
  };
  return (
    <PopUp>
      <div>
        <button onClick={() => onClose(false)}>&times;</button>
        <h1>Review Car</h1>
        <form onSubmit={handleAddReview}>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <AiFillStar
                  onClick={() => setReview({ ...review, rating: star })}
                  className={star <= review.rating ? "rated" : ""}
                  key={star}
                />
              );
            })}
          </div>
          <textarea
            name="comment"
            placeholder="Write a review"
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          />
          <button type="submit">Add Review</button>
        </form>
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
    width: 30rem;
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
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
    & > form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      .rating {
        svg {
          cursor: pointer;
          font-size: 1.2rem;
        }
        .rated {
          color: #ff8c38;
        }
      }
      textarea {
        outline: none;
        height: 1.3rem;
        color: #4d4d4d;
        font-size: 0.9rem;
        padding: 0.5rem 0.8rem;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
        height: 8rem;
        resize: none;
      }
      & > button {
        align-self: center;
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

export default ReviewCar;
