import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
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
`;

export default Layout;
