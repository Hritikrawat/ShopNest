import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}
