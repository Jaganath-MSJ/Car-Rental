import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchQuary } from "../App";

function Home() {
  const { searchQuary, setSearchQuary } = useContext(SearchQuary);
  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  const formattedCurrentDate = currentDate.toISOString().slice(0, 16);
  const formattedMaxDate = maxDate.toISOString().slice(0, 16);

  const handleChange = (e) => {
    setSearchQuary({
      ...searchQuary,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <h1>You got the travel plans, we get the travel cars.</h1>
      <p>
        Add adventure to your life by joining the car movement. Rent the perfect
        car to make your perfect road trip.
      </p>
      <div className="inputDate">
        <div>
          <label>Pick-up Date</label>
          <input
            type="datetime-local"
            name="startDate"
            min={formattedCurrentDate}
            max={formattedMaxDate}
            value={searchQuary.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Drop-off Date</label>
          <input
            type="datetime-local"
            name="endDate"
            min={formattedCurrentDate}
            max={formattedMaxDate}
            value={searchQuary.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="checkBox">
        <input
          type="checkBox"
          name="needDriver"
          checked={searchQuary.needDriver}
          onChange={(e) =>
            setSearchQuary({
              ...searchQuary,
              needDriver: e.target.checked,
            })
          }
        />
        <label>Need a driver</label>
      </div>
      <Link to="/cars">Find your car</Link>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.7rem;
  align-items: center;
  color: white;
  & > h1 {
    font-size: 3rem;
    text-align: center;
  }
  .inputDate {
    display: flex;
    gap: 2rem;
    & > div {
      display: flex;
      gap: 0.5rem;
      & > input {
        padding: 0.2rem 0.4rem;
        border-radius: 0.2rem;
        border: 1px solid #c2c2c2;
        outline: none;
      }
    }
  }
  .checkBox {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    & > input {
      width: 1rem;
      height: 1rem;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }
  & > p {
    font-size: 1.2rem;
    text-align: center;
  }
  & > a {
    color: white;
    background-color: #ff8c38;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    width: 20%;
    height: 2.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #161616;
    }
  }
  @media only screen and (max-width: 600px) {
    & > h1 {
      font-size: 2rem;
    }
    & > p {
      font-size: 1rem;
    }
    & > a {
      width: 40%;
    }
    .inputDate {
      flex-direction: column;
    }
  }
`;

export default Home;
