import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Page404 from "./pages/Page404";
import Host from "./pages/host/Host";
import HostNav from "./components/HostNav";
import HostIncome from "./pages/host/HostIncome";
import HostCars from "./pages/host/HostCars";
import HostReview from "./pages/host/HostReview";
import HostSingleCar from "./pages/host/HostSingleCar";
import HostCarDetails from "./components/host/HostCarDetails";
import HostCarPrice from "./components/host/HostCarPrice";
import HostCarPhoto from "./components/host/HostCarPhoto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="cars">
            <Route index element={<Cars />} />
            <Route path=":id" element={<CarDetails />} />
          </Route>

          <Route path="host" element={<HostNav />}>
            <Route index element={<Host />} />
            <Route path="income" element={<HostIncome />} />

            <Route path="cars">
              <Route index element={<HostCars />} />

              <Route path=":id" element={<HostSingleCar />}>
                <Route index element={<HostCarDetails />} />
                <Route path="price" element={<HostCarPrice />} />
                <Route path="photo" element={<HostCarPhoto />} />
              </Route>
            </Route>

            <Route path="review" element={<HostReview />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
