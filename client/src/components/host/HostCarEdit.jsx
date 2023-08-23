import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {
//   toastOptionsError,
//   toastOptionsSuccess,
// } from "../../utils/ToastOptions";
import GeneralSection from "../../components/host/GeneralSection";
import ConditionSection from "../../components/host/ConditionSection";
import ProofSection from "../../components/host/ProofSection";

function HostCarEdit() {
  const hostCar = useOutletContext();
  // const dispatch = useDispatch();
  const mileStoneValue = ["General", "Condition", "Proof"];
  const [mileStone, setMileStone] = useState(0);
  const [formData, setFormData] = useState({
    ...hostCar,
    carPhotos: [],
  });
  const [selectedFiles, setSelectedFiles] = useState(hostCar.carPhotos);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      carPhotos: [...prevData.carPhotos, ...selectedFiles],
    }));
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
  };

  return (
    <Cointainer>
      <div className="mileStone">
        {mileStoneValue.map((value, index) => {
          return (
            <button
              className={mileStone === index ? "presentMileStone" : ""}
              onClick={() => setMileStone(index)}
              key={value}
            >
              {value}
            </button>
          );
        })}
      </div>
      <form>
        {mileStone === 0 ? (
          <GeneralSection formData={formData} handleChange={handleChange} />
        ) : mileStone === 1 ? (
          <ConditionSection formData={formData} handleChange={handleChange} />
        ) : (
          <ProofSection
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            handleUpload={handleUpload}
            handleAddCar={handleAddCar}
          />
        )}
      </form>
      <div className="changeMileStone">
        {mileStone > 0 && (
          <button onClick={() => setMileStone(mileStone - 1)}>Back</button>
        )}
        {mileStoneValue.length - 1 > mileStone && (
          <button onClick={() => setMileStone(mileStone + 1)}>Next</button>
        )}
      </div>
      <ToastContainer />
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem 2rem;
  min-height: 52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .mileStone {
    display: flex;
    justify-content: center;
    gap: 3rem;
    & > button {
      background-color: transparent;
      border: 1px solid #161616;
      outline: none;
      border-radius: 0.3rem;
      width: 6rem;
      height: 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
    .presentMileStone {
      background-color: #161616;
      color: #fff7ed;
    }
  }
  & > form {
    display: flex;
    justify-content: center;
    gap: 2rem 4rem;
    @media screen and (max-width: 520px) {
      .generalInput,
      .conditionInput,
      .proofInput {
        width: 100%;
      }
    }
  }
  .changeMileStone {
    display: flex;
    justify-content: center;
    gap: 3rem;
    & > button {
      background-color: #ff8c38;
      border: none;
      outline: none;
      color: #fff7ed;
      border-radius: 0.3rem;
      width: 5rem;
      height: 1.8rem;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

export default HostCarEdit;
