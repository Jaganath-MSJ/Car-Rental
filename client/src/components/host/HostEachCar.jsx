import React from "react";
import styled from "styled-components";

function HostEachCar({ hostCar }) {
  return (
    <Article>
      <div className="carImage">
        <img src={hostCar.img} alt={hostCar.name} draggable="false" />
      </div>
      <div className="carName">
        <h4>{hostCar.name}</h4>
        <p>${hostCar.price}/day</p>
      </div>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 33rem;
  height: 8rem;
  .carImage {
    & > img {
      width: 13rem;
      height: 8rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
  .carName {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > h4 {
      margin: 0;
      font-size: 1.5rem;
    }
    & > p {
      margin: 0;
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 570px) {
    width: 95%;
    padding: 0 1rem;
    .carImage > img {
      width: 8rem;
      height: 5rem;
    }
  }
`;

export default HostEachCar;
