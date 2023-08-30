import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptionsError, toastOptionsSuccess } from "../utils/ToastOptions";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import ROLE from "../utils/role.js";
import {
  clearUser,
  getCurrentUser,
  selectUserNameById,
} from "../features/userSlice";
import { logoutApi } from "../utils/handleApi.js";

function Header() {
  const { userId, role, accessToken } = useSelector(getCurrentUser);
  const userName = useSelector((state) => selectUserNameById(state, userId));
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
  const Navigation = ({ className }) => {
    return (
      <ul className={`menuBar ${className}`}>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        {role === ROLE.HOST && (
          <li>
            <NavLink to="host">Host</NavLink>
          </li>
        )}
        <li>
          <NavLink to="cars">Cars</NavLink>
        </li>
        {!accessToken && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}
        {accessToken && <li onClick={handleLogout}>Logout</li>}
        {accessToken && (
          <li>
            <NavLink to={`user/${userId}`}>
              <FaUserCircle /> <span>{userName}</span>
            </NavLink>
          </li>
        )}
      </ul>
    );
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Nav>
      <h1>
        <Link to="">
          Car <span>Rental</span>
        </Link>
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
  & > h1 span {
    color: green;
  }
  & > nav {
    & > ul {
      display: flex;
      align-items: center;
      gap: 1.5rem;
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
