import products from "../data/products";
import "./Accessories.css";
import { useState } from "react";

function Accessories() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1,
    );
  };

  const accessoriesProducts = products.filter(
    (item) => item.category === "accessories",
  );
  let filteredProducts = [...accessoriesProducts];

  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-page">
      <h2>ACCESSORIES</h2>

      <div className="filters">
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort By</option>
          <option value="low-high">Price:Low to High </option>
          <option value="high-low">Price:High to Low</option>
        </select>
      </div>
    
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => {
              setSelectedProduct(product);
              setCurrentImage(0);
            }}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="accessories-popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="accessories-popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="accessories-close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              X
            </button>

           {/* <h2>{selectedProduct.name}</h2> */ }

            <div className="accessories-slider">
              <button className="arrow left" onClick={prevImage}>
                ❮
              </button>

              <img
                src={selectedProduct.images[currentImage]}
                alt=""
                className="accessories-slider-image"
              />    

              <button className="arrow right" onClick={nextImage}>
                ❯
              </button>
            </div>

            <div className="image-indicators">
              {selectedProduct.images.map((_, index) => (
                 <span
                  key={index}
                  className={index === currentImage ? "dot active-dot" : "dot"}
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>

         {/*   <p>₹{selectedProduct.price}</p> */}
         
          </div>
        </div>
      )}
    </div>
  );
}

export default Accessories;
