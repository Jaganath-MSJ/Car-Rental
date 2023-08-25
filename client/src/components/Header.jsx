import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { getCurrentUser, selectUserNameById } from "../features/userSlice";

function Header() {
  const { userId } = useSelector(getCurrentUser);
  const userName = useSelector((state) => selectUserNameById(state, userId));
  const Navigation = ({ className }) => {
    return (
      <ul className={className}>
        <li>
          <NavLink to="host">Host</NavLink>
        </li>
        <li>
          <NavLink to="cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to={`user/${userId}`}>
            <FaUserCircle /> <span>{userName}</span>
          </NavLink>
        </li>
        {/* <li>Logout</li> */}
      </ul>
    );
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Nav>
      <h1>
        <Link to="">Car Rental</Link>
      </h1>
      <nav>
        <AiOutlineMenu className="menu" onClick={() => setOpen(!open)} />
        <Navigation className={"maxMenu"} />
        {open && <Navigation className={"minMenu"} />}
      </nav>
    </Nav>
  );
}

const Nav = styled.header`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  & > nav {
    & > ul {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      & > li {
        list-style: none;
        & > a {
          color: #4d4d4d;
          transition: 0.3s ease-in-out;
          & > svg {
            margin-bottom: -0.2rem;
            font-size: 1.2rem;
          }
        }
        & > a:hover,
        .active {
          color: #161616;
          font-weight: bold;
          text-decoration: underline;
          text-underline-offset: 0.3rem;
        }
      }
      transition: all 0.5s ease-in-out;
    }
    .menu {
      display: none;
    }
    .minMenu {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    & > nav {
      .maxMenu {
        display: none;
      }
      .menu {
        display: block;
        font-size: 1.5rem;
      }
      .minMenu {
        display: block;
        position: absolute;
        top: 4rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #fff7ed;
        border-radius: 0 0 0.3rem 0.3rem;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
        padding: 0.5rem 1.4rem;
        font-size: 1.1rem;
      }
    }
  }
`;

export default Header;
