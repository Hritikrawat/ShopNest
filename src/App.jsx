import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";
import Pagenotfound from "./services/Pagenotfound";
import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    
      
      // <ThemeProvider>
      <CartContextProvider>
      <WishListContextProvider>
      <Routes>
        <Route path="/" element={  <Navigate to="/home"/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/wishlist" element={ <Wishlist/>} />
        <Route path="/Orders" element={ <Orders/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      <ToastContainer />
      </WishListContextProvider>
      </CartContextProvider>

      
      // </ThemeProvider>
    
  );
}
