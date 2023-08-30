import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopUp from "../../pages/PopUp";

function CarAllPhotos({ onClose, carPhotos }) {
  return (
    <PopUp onClose={onClose}>
      <Cointainer>
        <Carousel showArrows={true}>
          {carPhotos.map((photo, index) => (
            <div key={photo} className="image">
              <img src={photo} alt={`car ${index}`} draggable="false" />
            </div>
          ))}
        </Carousel>
      </Cointainer>
    </PopUp>
  );
}

const Cointainer = styled.div`
  width: 30rem;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default CarAllPhotos;
