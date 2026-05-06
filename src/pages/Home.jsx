import heroImage from "/heroImage.webp";
import "./Home.css";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import ViewByCategory from "../components/ViewByCategory";
import { useEffect, useState } from "react";
import axios from "axios";
//import CategorySection from "../components/CategorySection";


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios 
    .get("https://mybackendapi123-d4e2fzh5gpbqhwfd.centralindia-01.azurewebsites.net/api/products")
    .then(res =>{
      const formatted = res.data.map(p => ({
        ...p,
        images:p.images ? JSON.parse(p.images) : []
      }));
      setProducts(formatted); 
    });
  }, []);

  return (
    <>
      <div className="hero">  
        <img src={heroImage} alt="hero" className="hero-img" />
        <div className="hero-content">
          {/*<button className="shop-btn">Shop Now</button>*/}
        </div>
      </div>

        <NewArrivals />
        <FeaturedProducts />  
        <ViewByCategory />
    </>
  );
}

export default Home;











