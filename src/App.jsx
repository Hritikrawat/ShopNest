import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./components/Home";
import Orders from "./components/Orders"
import Cart from "./components/Cart"

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
