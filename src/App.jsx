import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import MyAccount from "./Pages/MyAccount";
import NotFound from "./Pages/NotFound";
import SingIn from "./Pages/SingIn";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
