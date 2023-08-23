import React from "react";
import { AiFillDelete } from "react-icons/ai";
import styled from "styled-components";

function ProofSection({
  selectedFiles,
  setSelectedFiles,
  handleUpload,
  handleAddCar,
}) {
  const handleFileChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        setSelectedFiles((prevData) => [...prevData, reader.result]);
      };
    }
  };

  const handleRemoveFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };
  return (
    <Container className="proofInput">
      <div className="addImages">
        <label>
          Add Images (only jpg, jpeg, png)
          <input
            type="file"
            name="carImage"
            placeholder="choose images"
            multiple
            accept=".jpeg, .png, .jpg"
            onChange={handleFileChange}
          />
        </label>
        <ul className="uploadedImage">
          {selectedFiles.map((file, index) => {
            return (
              <li key={index}>
                <img src={file} alt={index} />
                <AiFillDelete onClick={() => handleRemoveFile(index)} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="buttons">
        <button name="upload" onClick={handleUpload}>
          Upload Images
        </button>
        <button onClick={handleAddCar}>Add a Car</button>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30rem;
  gap: 1rem;
  .addImages {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > label {
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
      & > li {
        display: flex;
        align-items: center;
        background-color: #fff7ed;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        justify-content: space-between;
        gap: 0.3rem;
        & > img {
          width: 7rem;
          border-radius: 0.3rem;
        }
        & > svg {
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: red;
          }
        }
        @media only screen and (max-width: 500px) {
          width: 90%;
        }
      }
    }
  }
  .buttons {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

export default ProofSection;
