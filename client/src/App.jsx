import React, { createContext, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register, { registerAction } from "./pages/Register";
import Login, { loginAction } from "./pages/Login";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/cars/CarDetails";
import Page404 from "./pages/Page404";
import Host from "./pages/host/Host";
import HostNav from "./components/host/HostNav";
import HostIncome from "./pages/host/HostIncome";
import HostCars from "./pages/host/HostCars";
import HostReview from "./pages/host/HostReview";
import HostSingleCar from "./pages/host/HostSingleCar";
import HostCarDetails from "./components/host/HostCarDetails";
import HostCarPrice from "./components/host/HostCarPrice";
import HostCarPhoto from "./components/host/HostCarPhoto";
import HostAddCar from "./pages/host/HostAddCar";
import HostCarEdit from "./components/host/HostCarEdit";
import Profile from "./pages/profile/Profile";
import ProfileAccount from "./pages/profile/ProfileAccount";
import ProfileBookings from "./pages/profile/ProfileBookings";
import ProfileSavedCar from "./pages/profile/ProfileSavedCar";

export const SearchQuary = createContext();

function App() {
  const [searchQuary, setSearchQuary] = useState({
    startDate: "",
    endDate: "",
    needDriver: false,
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} action={registerAction} />
        <Route path="login" element={<Login />} action={loginAction} />

        <Route path="user/:userId" element={<Profile />}>
          <Route index element={<ProfileAccount />} />
          <Route path="booking" element={<ProfileBookings />} />
          <Route path="saved" element={<ProfileSavedCar />} />
        </Route>

        <Route path="cars">
          <Route index element={<Cars />} />
          <Route path=":carId" element={<CarDetails />} />
        </Route>

        <Route path="host" element={<HostNav />}>
          <Route index element={<Host />} />
          <Route path="income" element={<HostIncome />} />

          <Route path="cars">
            <Route index element={<HostCars />} />

            <Route path=":hostCarId" element={<HostSingleCar />}>
              <Route index element={<HostCarDetails />} />
              <Route path="price" element={<HostCarPrice />} />
              <Route path="photo" element={<HostCarPhoto />} />
              <Route path="edit" element={<HostCarEdit />} />
            </Route>
          </Route>

          <Route path="review" element={<HostReview />} />
          <Route path="addCar" element={<HostAddCar />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return (
    <SearchQuary.Provider value={{ searchQuary, setSearchQuary }}>
      <RouterProvider router={router} />
    </SearchQuary.Provider>
  );
}

export default App;
