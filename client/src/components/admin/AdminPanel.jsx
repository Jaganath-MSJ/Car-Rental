import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { useSelector } from "react-redux";
import { getCurrentUser, selectUserInfoById } from "../../features/userSlice";

function AdminPanel() {
  const { userId } = useSelector(getCurrentUser);
  const userInfo = useSelector((state) => selectUserInfoById(state, userId));
  return (
    <Cointainer>
      <aside>
        <header>
          <img
            src={
              userInfo.profilePic
                ? userInfo.profilePic
                : "/assets/userCircle.png"
            }
            alt={userInfo.name}
          />
          <h2>{userInfo.name}</h2>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="">
                <MdDashboard />
                Dasboard
              </NavLink>
            </li>
            <li>
              <NavLink to="hostRequest">
                <CiSquareQuestion />
                Host Requests
              </NavLink>
            </li>
            <li>
              <NavLink to="couponCode">
                <BiSolidOffer />
                Coupon Code
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </Cointainer>
  );
}

const Cointainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  & > aside {
    height: 80vh;
    width: 15rem;
    border: 1px solid #ededed;
    border-radius: 0.3rem;
    & > header {
      display: flex;
      padding: 1rem;
      gap: 0.5rem;
      align-items: center;
      img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
      }
    }
    & > nav ul {
      list-style: none;
      & > li {
        font-size: 1.2rem;
        & > a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border: 1px solid #ededed;
          &:hover,
          &.active {
            border-right: 3px solid var(--main-color);
          }
        }
      }
    }
  }
  & > section {
    border: 1px solid #ededed;
    border-radius: 0.3rem;
    height: 76vh;
    padding: 1rem;
    width: calc(100% - 18rem);
  }
`;

export default AdminPanel;
