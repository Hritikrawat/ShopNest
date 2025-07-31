import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
