import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  toastOptionsError,
  toastOptionsSuccess,
} from "../../utils/ToastOptions";
import { MdAccountBox, MdCreditScore } from "react-icons/md";
import { FaBuyNLarge } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import ROLE from "../../utils/role.js";
import {
  clearUser,
  getCurrentUser,
  selectUserInfoById,
  uploadProfilePic,
} from "../../features/userSlice";
import { logoutApi } from "../../utils/handleApi.js";

function Profile() {
  const { userId, accessToken } = useSelector(getCurrentUser);
  const userInfo = useSelector((state) => selectUserInfoById(state, userId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await logoutApi();
    if (res.data.status) {
      dispatch(clearUser());
      toast.success(res.data.msg, toastOptionsSuccess);
      navigate("/login");
    } else {
      toast.error("Something went wrong", toastOptionsError);
    }
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      const image = reader.result;
      try {
        if (image === "") return;
        dispatch(
          uploadProfilePic({
            details: {
              userId: userId,
              profilePic: image,
            },
            token: accessToken,
          })
        );
      } catch (err) {
        toast.error("Something went wrong", toastOptionsError);
      }
    };
  };

  if (!userInfo) return <div>Loading...</div>;
  return (
    <Cointainer>
      <div>
        <aside>
          <header>
            <label className="userImage">
              <img
                src={
                  userInfo.profilePic
                    ? userInfo.profilePic
                    : "/assets/userCircle.png"
                }
                alt={userInfo.name}
                draggable="false"
              />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                name="prifilePic"
                max={1}
                onChange={handleImageUpload}
              />
            </label>
            <h2>{userInfo.name}</h2>
            <p>{userInfo.phone}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.city}</p>
            {userInfo.role === ROLE.USER && <button>Become a Host</button>}
          </header>
          <nav>
            <ul>
              <div className="line" />
              <li>
                <Link to="">
                  <MdAccountBox /> <span>Account</span>
                </Link>
              </li>
              <div className="line" />
              <li>
                <Link to="booking">
                  <FaBuyNLarge /> <span>My Bookings</span>
                </Link>
              </li>
              <div className="line" />
              <li>
                <Link to="saved">
                  <BsFillBookmarkFill /> <span>Saved Cars</span>
                </Link>
              </li>
              <div className="line" />
              <li>
                <p>
                  <MdCreditScore /> <span>Credit</span>
                </p>
              </li>
              <div className="line" />
              <li>
                <div>
                  <AiFillGift /> <span>Promo Code</span>
                </div>
                <div>
                  <p>Share the promo code to get 10% off</p>
                  <p>
                    Your Promocode : 35f25n92&nbsp;
                    <BiCopy
                      onClick={() => navigator.clipboard.writeText("35f25n92")}
                    />
                  </p>
                </div>
              </li>
              <div className="line" />
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </aside>
        <Outlet context={userInfo} />
      </div>
    </Cointainer>
  );
}

const Cointainer = styled.section`
  & > div {
    padding: 0.5rem 1rem;
    display: flex;
    gap: 1rem;
    & > aside {
      background-color: white;
      border-radius: 0.3rem;
      width: 21%;
      min-height: 78vh;
      padding: 0.5rem 1rem;
      & > header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        .userImage {
          img {
            cursor: pointer;
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
          }
          & > input {
            display: none;
          }
        }
        & > button {
          background-color: #ff8c38;
          color: #fff7ed;
          padding: 0.3rem 0.5rem;
          border-radius: 0.3rem;
          border: none;
          outline: none;
          cursor: pointer;
          &:hover {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
            color: #161616;
          }
        }
      }
      & > nav {
        margin-top: 0.5rem;
        & > ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
          & > li {
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            span {
              font-weight: 600;
            }
            div:last-child {
              padding: 0.5rem 0;
              padding-left: 1.5rem;
              svg {
                cursor: pointer;
              }
            }
            & > button {
              align-self: flex-end;
              background-color: gray;
              color: #fff7ed;
              padding: 0.3rem 0.7rem;
              border-radius: 0.3rem;
              border: none;
              outline: none;
              cursor: pointer;
              &:hover {
                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                color: #161616;
              }
            }
          }
          .line {
            border-top: 1px dotted #161616;
          }
        }
      }
    }
    & > section {
      height: 76vh;
      padding: 1rem 1rem;
      background-color: white;
      border-radius: 0.3rem;
      width: 73.5%;
      overflow: auto;
    }
    @media only screen and (max-width: 950px) {
      & > aside {
        width: 40%;
      }
      & > section {
        width: 60%;
      }
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      & > aside,
      & > section {
        width: 93%;
        height: max-content;
      }
    }
  }
`;

export default Profile;
