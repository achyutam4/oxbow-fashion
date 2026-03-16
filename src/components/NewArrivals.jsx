import { Link } from "react-router-dom";
import "./NewArrivals.css";
import products from "../data/products.js";
import { useState } from "react";

function NewArrivals() {
  
  const[product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  return(
          <section className="new-arrivals">

             <h2>New Arrivals</h2>
         
      
            <div className="products-grid">
              {products.slice(0,4).map((product) => (
                <div
                  /*to={`/product/${product.id}`}*/ 
                  key={product.id}
                  className="product-link"  
                   onClick={() => setProduct(product)}
                >
                  <div className="product-card">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <h3>{product.name}</h3>
                    <p>₹ {product.price}</p>
                  </div>

                </div>
              ))}
            </div>

             {product && (
            <div className="popup-overlay">
                <div className="popup">
                
                <button
                className="close-btn"
                onClick={() => setProduct(null)}
                >
                X
                </button>
                
                {/*<h2>{product.name}</h2>  */} 

              <div className="slider">
                <button className="arrow left" onClick={prevImage}>
                 ❮
                 </button>

              <img
                src={product.images[currentImage]}
                alt=""
                className="slider-image"
              />

              <button className="arrow right" onClick={nextImage}>
                ❯
              </button>
            </div>

            <div className="image-indicators">
              {product.images.map((_, index) => (
                <span
                  key={index}
                  className={index === currentImage ? "dot active-dot" : "dot"}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>

                {/*<p>₹{product.price}</p>*/}
              

                </div>
            </div> 
             )}

            <div className="view-more-container"> 
                 <Link to="/women" className="view-more">
                  View All →
                 </Link> 
            </div>
          </section>
  );
}

export default NewArrivals;


