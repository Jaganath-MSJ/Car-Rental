import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";
import { refreshTokenApi } from "../utils/handleApi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/userSlice";

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkRereshToken() {
      const data = await refreshTokenApi();
      if (data?.accessToken) {
        dispatch(setCurrentUser(data.accessToken));
      }
    }
    checkRereshToken();
  }, [dispatch]);

  return (
    <Main>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
  & > section {
    min-height: 82.7vh;
  }
`;

export default Layout;
