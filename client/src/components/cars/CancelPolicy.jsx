import React from "react";
import styled from "styled-components";
import PopUp from "../../pages/PopUp";

function CancelPolicy({ onClose }) {
  return (
    <PopUp onClose={onClose}>
      <Cointainer>
        <h4>Cancellation Policy</h4>
        <p>
          You're eligible for a full refund for cancellations made 24 hours
          before your booking start time
        </p>
        <p>
          You're eligible for a 50% refund for cancellations made between 24
          hours to 6 hours before your booking starte No refund will be issued
          for cancellations made in the last 4 hours before or after your
          booking at one
        </p>
      </Cointainer>
    </PopUp>
  );
}

const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
  p {
    text-align: justify;
  }
`;
export default CancelPolicy;
