import React, { useState } from "react";
import styled from "styled-components";
import Data from "../../data/data.json";
import { AiFillDelete } from "react-icons/ai";

function HostAddCar() {
  const [carName, setCarName] = useState("");
  const [category, setCategory] = useState("");
  const [rent, setRent] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    e.preventDefault();
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleRemoveFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    for (const file of selectedFiles) {
      formData.append("images", file);
    }

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Images uploaded successfully");
      } else {
        console.error("Failed to upload images");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Cointainer>
      <form>
        <div className="carInput">
          <input
            type="text"
            name="carname"
            placeholder="Car Name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {Data.filters.map((filter) => {
              return (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="rent"
            placeholder="Rent"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="carImage">
          <label className="addImages">
            Add Images {`(only jpg, jpeg, png)`}
            <input
              type="file"
              name="carImage"
              placeholder="choose images"
              multiple
              accept=".jpeg, .png, .jpg"
              onChange={handleFileChange}
            />
          </label>
          <div className="uploadedImage">
            {selectedFiles.map((file, index) => {
              return (
                <div key={index}>
                  <p>{file.name}</p>
                  <AiFillDelete onClick={() => handleRemoveFile(index)} />
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <button type="upload" name="upload" onClick={handleUpload}>
              Upload Images
            </button>
            <button type="submit">Add a Car</button>
          </div>
        </div>
      </form>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem 2rem;
  min-height: 71vh;
  & > form {
    display: flex;
    gap: 2rem 4rem;
    .carInput {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & > input,
      & > textarea,
      & > select {
        outline: none;
        height: 1.3rem;
        color: #4d4d4d;
        font-size: 0.9rem;
        padding: 0.5rem 0.8rem;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
      }
      & > select {
        height: 2.3rem;
      }
      & > textarea {
        height: 10rem;
        resize: none;
      }
    }
    .carImage {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .addImages {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: max-content;
        height: 1.3rem;
        color: #4d4d4d;
        text-align: center;
        font-size: 0.9rem;
        padding: 0.5rem 0.8rem;
        background-color: #f1f1f1;
        border: 1px solid #c2c2c2;
        border-radius: 0.2rem;
        cursor: pointer;
        & > input {
          display: none;
        }
      }
      .uploadedImage {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        & > div {
          display: flex;
          background-color: white;
          border-radius: 0.3rem;
          padding: 0.5rem 1rem;
          justify-content: space-between;
          gap: 0.3rem;
          & > p {
            margin: 0;
          }
          & > svg {
            cursor: pointer;
          }
          @media only screen and (max-width: 500px) {
            width: 90%;
          }
        }
      }
      .buttons {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        & > button {
          background-color: #ff8c38;
          border: none;
          outline: none;
          width: 10rem;
          height: 2rem;
          font-size: 1.05rem;
          border-radius: 0.3rem;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: #161616;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
    & > form {
      flex-direction: column;
      .carInput,
      .carImage {
        width: 100%;
      }
    }
  }
`;

export default HostAddCar;
