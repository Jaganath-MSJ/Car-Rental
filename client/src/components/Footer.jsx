import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <p>&copy; 2023 Car Rental</p>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  color: #aaaaaa;
`;

export default Footer;
