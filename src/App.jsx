import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders"
import Cart from "./components/Cart"
import Wishlist from "./components/Wishlist";
import Pagenotfound from "./services/Pagenotfound";
import { ThemeProvider } from "./context/ThemeProvider";


export default function App() {
  return (
    
      
      <ThemeProvider>
      <Routes>
        <Route path="/" element={  <Navigate to="/home"/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/wishlist" element={ <Wishlist/>} />
        <Route path="/Orders" element={ <Orders/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Pagenotfound/>}></Route>
      </Routes>
      </ThemeProvider>
    
  );
}
