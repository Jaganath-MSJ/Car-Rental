import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import Data from "../../data/data.json";
import { formatDate1 } from "../../utils/DateFunction";

function HostReview() {
  return (
    <Cointainer>
      <div className="header">
        <header>
          <h1>Your reviews</h1>
          <p>
            last <span>30 days</span>
          </p>
        </header>
        <div>
          <div className="starHeader">
            <h2>4.5</h2>
            <p>
              <AiFillStar />
              overall rating
            </p>
          </div>
          <div className="stars">
            <div>
              <p>5 stars</p>
              <RatingBar totalRatings={100} starCount={70} />
              <p>70%</p>
            </div>
            <div>
              <p>4 stars</p>
              <RatingBar totalRatings={100} starCount={50} />
              <p>50%</p>
            </div>
            <div>
              <p>3 stars</p>
              <RatingBar totalRatings={100} starCount={30} />
              <p>30%</p>
            </div>
            <div>
              <p>2 stars</p>
              <RatingBar totalRatings={100} starCount={10} />
              <p>10%</p>
            </div>
            <div>
              <p>1 star&nbsp;</p>
              <RatingBar totalRatings={100} starCount={5} />
              <p>5%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="reviewHeader">
          <h2>Reviews {`(${Data.reviews.length})`}</h2>
        </div>
        <div className="allReviews">
          {Data.reviews.map((review, index) => {
            return (
              <article key={index}>
                <div className="reviewStar">
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    return star <= review.star && <AiFillStar key={index} />;
                  })}
                </div>
                <div className="reviewedBy">
                  {review.reviewedBy}
                  <span>{formatDate1(review.reviewedOn)}</span>
                </div>
                <div className="reviewDesc">{review.review}</div>
              </article>
            );
          })}
        </div>
      </div>
    </Cointainer>
  );
}

function RatingBar({ totalRatings, starCount }) {
  const percentage = (starCount / totalRatings) * 100;
  return (
    <div className="rating-bar">
      <div className="filled" style={{ width: `${percentage}%` }}></div>
      <div className="empty" style={{ width: `${100 - percentage}%` }}></div>
    </div>
  );
}

const Cointainer = styled.section`
  padding: 1rem;
  min-height: 71vh;
  display: flex;
  gap: 2rem;
  .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    & > header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      & > h1 {
        margin: 0;
        font-size: 1.7rem;
      }
      & > p {
        & > span {
          text-decoration: underline;
          text-underline-offset: 0.2rem;
        }
      }
    }
    & > div {
      .starHeader {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        & > * {
          margin: 0;
        }
        & > p > svg {
          color: #ff8c38;
        }
      }
      .stars {
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > div {
          display: flex;
          align-items: center;
          gap: 1rem;
          & > p {
            margin: 0;
          }
          .rating-bar {
            width: 70%;
            display: flex;
            height: 8px;
            background-color: #ddd;
            border-radius: 11rem;
            overflow: hidden;
            .filled {
              background-color: #ff8c38;
            }
            .empty {
              background-color: #b9b9b9;
            }
            @media only screen and (max-width: 670px) {
              width: 55%;
            }
          }
        }
      }
    }
  }
  .review {
    width: 50%;
    .allReviews {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      & > article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .reviewStar {
          & > svg {
            color: #ff8c38;
          }
        }
        .reviewedBy {
          display: flex;
          gap: 0.3rem;
          & > span {
            color: #8c8c8c;
          }
        }
        .reviewDesc {
          text-align: justify;
        }
      }
    }
  }
  @media only screen and (max-width: 670px) {
    padding: 1rem 0;
    flex-direction: column;
    .header, .review {
      width: 100%;
    }
  }
`;

export default HostReview;
