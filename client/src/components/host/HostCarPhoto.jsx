import React from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

function HostCarPhoto() {
  const hostCar = useOutletContext();

  return (
    <Cointainer>
      {hostCar.carPhotos.map((photo, index) => {
        return <img src={photo} alt={index} key={index} />;
      })}
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  & > img {
    width: 10rem;
    height: 8rem;
    border-radius: 0.3rem;
    @media only screen and (max-width: 850px) {
      width: 8rem;
      height: 6rem;
    }
    @media only screen and (max-width: 500px) {
      width: 6.7rem;
      height: 5.5rem;
    }
  }
`;

export default HostCarPhoto;
