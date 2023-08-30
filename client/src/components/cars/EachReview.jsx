import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { selectUserNameById } from "../../features/userSlice";
import { formatDate1 } from "../../utils/DateFunction";

function EachReview({ review }) {
  const reviewerName = useSelector((state) =>
    selectUserNameById(state, review.userId)
  );
  return (
    <Cointainer>
      <div className="reviewStar">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <AiFillStar
              key={star}
              className={star <= review?.rating ? "rated" : ""}
            />
          );
        })}
      </div>
      <h4>{reviewerName}</h4>
      <h4>{review.comment}</h4>
      <p>{formatDate1(review.reviewedOn)}</p>
    </Cointainer>
  );
}

const Cointainer = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #161616;
  border-radius: 0.3rem;
  padding: 0.5rem;
  width: 15rem;
  gap: 0.5rem;
  .reviewStar {
    svg {
      font-size: 1.1rem;
      &.rated {
        color: #ff8c38;
      }
    }
  }
  h4 {
    text-align: justify;
  }
`;

export default EachReview;
