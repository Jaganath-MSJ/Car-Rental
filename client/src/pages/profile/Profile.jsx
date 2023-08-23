import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { LiaUserCircle } from "react-icons/lia";
import { MdAccountBox, MdCreditScore } from "react-icons/md";
import { FaBuyNLarge } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { getCurrentUser, selectUserInfoById } from "../../features/userSlice";

function Profile() {
  const { userId } = useSelector(getCurrentUser);
  const userInfo = useSelector((state) => selectUserInfoById(state, userId));
  if (!userInfo) return <div>Loading...</div>;
  return (
    <Cointainer>
      <aside>
        <header>
          <LiaUserCircle />
          <h2>{userInfo.name}</h2>
          <p>{userInfo.email}</p>
          <p>{userInfo.city}</p>
          <button>Become a Host</button>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="">
                <MdAccountBox /> Account
              </Link>
            </li>
            <li>
              <Link to="rented">
                <FaBuyNLarge /> My Rented Car
              </Link>
            </li>
            <li>
              <Link to="saved">
                <BsFillBookmarkFill /> Saved Cars
              </Link>
            </li>
            <li>
              <Link to="credit">
                <MdCreditScore /> Credit
              </Link>
            </li>
            <li>
              <div>
                <AiFillGift /> Promo Code
              </div>
              <div>
                <p>Share the promo code to get 10% off</p>
                <p>
                  Your Promocode : 35f25n92 <BiCopy />
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </Cointainer>
  );
}

const Cointainer = styled.section`
  padding: 1rem;
  & > aside {
    background-color: white;
    border-radius: 0.3rem;
    width: 20rem;
    & > header {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > svg {
        font-size: 7rem;
      }
    }
  }
`;

export default Profile;
