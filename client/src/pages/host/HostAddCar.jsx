import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  toastOptionsError,
  toastOptionsSuccess,
} from "../../utils/ToastOptions";
import GeneralSection from "../../components/host/GeneralSection";
import ConditionSection from "../../components/host/ConditionSection";
import ProofSection from "../../components/host/ProofSection";
import { addCar } from "../../features/carSlice";
import { getCurrentUser } from "../../features/userSlice";

function HostAddCar() {
  const [addCarRequest, setAddCarRequest] = useState("idle");
  const dispatch = useDispatch();
  const mileStoneValue = ["General", "Condition", "Proof"];
  const [mileStone, setMileStone] = useState(0);
  const [formData, setFormData] = useState({
    carName: "",
    model: "",
    carNumber: "",
    category: "",
    rent: "",
    description: "",
    noOfSeats: "",
    mileage: "",
    fuelType: "",
    gearType: "",
    airCondition: "",
    carPhotos: [],
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { userId, accessToken } = useSelector(getCurrentUser);

  const handleChange = (e) => {
    e.preventDefault();
    let newValue = e.target.value.replace(/\s+/g, " ");
    if (["rent", "noOfSeats", "mileage"].includes(e.target.name)) {
      newValue = newValue.replace(/\D/g, "").trim();
    }
    if (e.target.name === "carNumber") {
      newValue = newValue.toUpperCase().trim();
    }
    setFormData({
      ...formData,
      [e.target.name]: newValue,
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      carPhotos: [...selectedFiles],
    }));
  };

  const handleValidate = () => {
    if (
      !formData.carName ||
      !formData.model ||
      !formData.carNumber ||
      !formData.category ||
      !formData.rent ||
      !formData.description ||
      !formData.noOfSeats ||
      !formData.mileage ||
      !formData.fuelType ||
      !formData.gearType ||
      !formData.airCondition
    ) {
      toast.warning("Please fill all the fields", toastOptionsError);
      return false;
    } else if (formData.carPhotos.length < 1 && selectedFiles.length > 1) {
      toast.warning("Please click on upload images", toastOptionsError);
      return false;
    } else if (selectedFiles.length < 1) {
      toast.warning("Please upload at least one photo", toastOptionsError);
      return false;
    }
    return true;
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      if (handleValidate() && addCarRequest === "idle") {
        setAddCarRequest("pending");
        dispatch(
          addCar({
            details: {
              userId: userId,
              carName: formData.carName.trim(),
              model: formData.model.trim(),
              carNumber: formData.carNumber.trim(),
              category: formData.category,
              rent: formData.rent,
              description: formData.description.trim(),
              noOfSeats: formData.noOfSeats,
              mileage: formData.mileage,
              fuelType: formData.fuelType,
              gearType: formData.gearType,
              airCondition: formData.airCondition,
              carPhotos: formData.carPhotos,
            },
            token: accessToken,
          })
        );
        setFormData({});
        setSelectedFiles([]);
        toast.success("Car added successfully", toastOptionsSuccess);
        setAddCarRequest("idle");
      }
    } catch (err) {
      toast.error("Something went wrong", toastOptionsError);
      setAddCarRequest("idle");
    }
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
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem 2rem;
  min-height: 71vh;
  display: flex;
  flex-direction: column;
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

export default HostAddCar;
