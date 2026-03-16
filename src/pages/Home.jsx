import heroImage from "../assets/heroImage.webp";
import "./Home.css";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import ViewByCategory from "../components/ViewByCategory";


function Home() {
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
