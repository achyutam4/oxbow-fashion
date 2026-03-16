import { useParams } from "react-router-dom";
import products from "../data/products";
import "./CategoryPage.css";
import {Link } from "react-router-dom";   
import { useState } from "react";

function CategoryPage() {
    const {categoryName} = useParams();
    const[product, setProduct] = useState(null);
    const [sortOrder, setSortOrder] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
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

let filteredProducts = products.filter(
    (item) => item.category === categoryName 
);


if(selectedSize) {
    filteredProducts = filteredProducts.filter((item) =>
    item.size.includes(selectedSize)
    );
}


if(selectedColor) {
    filteredProducts = filteredProducts.filter(
        (item) => item.color === selectedColor
    );
}


if(sortOrder === "low-high") {
    filteredProducts.sort((a,b) => a.price - b.price);
}

 
if(sortOrder === "high-low") {
    filteredProducts.sort((a,b) => b.price - a.price);
}

return (
    <div>
        <h2 className="fontss">{categoryName.toUpperCase()}</h2>
       
        <div className="filters">

            <select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Sort By</option>
                <option value="low-high">Price:Low to High </option>
                <option value="high-low">Price:High to Low</option>
            </select>
{/*
            <select onChange={(e) => setSelectedSize(e.target.value)}>
                <option value="">Filter by Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>

            <select onChange={(e) => setSelectedColor(e.target.value)}>
                <option value="">Filter by Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
            </select>
*/}
        </div>

        <div className="products-grid">
        {filteredProducts.map((product) => (

            <div 
              className="product-card"
              key={product.id}
              to ={`/product/${product.id}`} 
                onClick={() => setProduct(product)}
             > 
             <img src={product.image} alt={product.title} />
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p> 
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
                
                {/*<h2>{product.name}</h2>*/}   

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
      
              {/*  <p>₹{product.price}</p> */}
                </div>  
            </div> 
             )}
</div>
);
}

export default CategoryPage;