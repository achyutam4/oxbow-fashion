  import products from "../data/products";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import "./Women.css";
  //import { ImInsertTemplate } from "react-icons/im";

  function Women() {
      const [product,setProduct] = useState(null);
      const [sortOrder, setSortOrder] = useState("");
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


      /*
      const [sortOption,setSortOption] = useState("");   

      const handleSortChange= (e) =>{
          setSortOption(e.target.value);
      };

      let womenProducts = products.filter(
          (item) => item.category === "women"
      );

      if(sortOption === "lowToHigh") {
      womenProducts = [...womenProducts].sort((a,b) => a.price - b.price);
      }

      if(sortOption === "highToLow") {
          womenProducts = [...womenProducts].sort((a,b) => b.price - a.price);
      }


  */
    const womenCategories = [
      "sarees",
      "anarkali",
      "kurtis",
      "salwar-suits",
      "lehengas",
      "Dupatta",
      "Gowns",
      "Ethnic-sets",
    ];

    const womenProducts = products.filter((product) =>
      womenCategories.includes(product.category)
    );

    let filteredProducts = [...womenProducts];

    if(sortOrder === "low-high") {
      filteredProducts.sort((a,b) => a.price - b.price);
    }

    if(sortOrder === "high-low") {
      filteredProducts.sort((a,b) => b.price - a.price);
    }

    return (
      <section className="category-page">
        <h2>Women's Collection</h2>

      <div className="filters">

              <select onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">Sort By</option>
                  <option value="low-high">Price:Low to High </option>
                  <option value="high-low">Price:High to Low</option>
              </select>
      </div>  
        
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
             // to={`/product/${product.id}`}
              key={product.id}
              className="product-link"
              onClick={() => setProduct(product)}
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} loading="lazy" />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
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


      </section>
    );
  }

  export default Women;

  /*
  function Women(){
      const { category } = useParams();

      const filteredProducts = products.filter(
          (product) => 
              product.mainCategory === "women" &&
              product.category === category
      );


      return(
          <div>
              <h2>{category}</h2>

              {filteredProducts.map((product) => (
                  <div key={product.id}>
                      <h3>{product.name}</h3>
                      <p>₹{product.price}</p>
                  </div>
              ))}
          </div>
      );
  }

  export default Women;
  */
