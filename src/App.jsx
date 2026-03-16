import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Women from "./pages/Women";
//import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import { useState } from "react";
import Accessories from "./pages/Accessories";
//import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import SearchPage from "./components/SearchPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TrustSection from "./components/TrustSection";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [wishlist, setWishlist] = useState([]);
 
  return (
    <>
       <ScrollToTop />
       
      <Navbar 
     // isLoggedin ={isLoggedIn}
     //setIsLoggedIn = {setIsLoggedIn}
     // wishlist = {wishlist} 
      />

     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/women" element={<Women />} />
     {/*<Route path="/product/:id" element={<ProductDetails />} /> */}  
     <Route path="/category/:categoryName" element={<CategoryPage/>} />
     <Route path="/accessories" element={<Accessories />} />  
     <Route path ="/cart" element ={<Cart />} />
     <Route path ="/search/:query" element={<SearchPage />} />
     </Routes>
      <TrustSection />
      <Footer />  
     </>         
  );
}

export default App;


