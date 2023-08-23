import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { refreshTokenApi } from "../utils/handleApi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/userSlice";

function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkRereshToken() {
      console.log("checkRereshToken");
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
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
  & > section {
    min-height: 82.3vh;
  }
`;

export default Layout;
