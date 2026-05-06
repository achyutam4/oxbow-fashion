import { useEffect, useState } from "react";
import axios from "axios";
import "./Women.css";
  //import products from "../data/products";
  //import { ImInsertTemplate } from "react-icons/im";

  function Women() {
    
      const [products, setProducts] = useState([]);
      const [product,setProduct] = useState(null);
      const [sortOrder, setSortOrder] = useState("");
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [currentImage, setCurrentImage] = useState(0);
      const [filterCategory, setFileCategory] = useState("all");

      
      const getImages = (product) => {
        return JSON.parse(product?.Images || "[]");
      };  

      useEffect(()=> {
            axios
      .get("https://mybackendapi123-d4e2fzh5gpbqhwfd.centralindia-01.azurewebsites.net/api/products")
      .then(res => {
        const formatted = res.data.map(p => ({
          ...p,
          images: JSON.parse(p.images)
        }));

        setProducts(formatted);
      });
      }, []);   

      let womenProducts = products.filter((p) => p.category === "women");

      if (sortOrder === "low") {
        womenProducts = [...womenProducts].sort((a, b) => a.price - b.price);
      }

      if (sortOrder === "high") {
        womenProducts = [...womenProducts].sort((a, b) => b.price - a.price);
      }

      /*
  const nextImage = () => {
      const images = getItems(product);

    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const images = getImages(product);

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }; */
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
  /*  const womenCategories = [
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
  */
  /*
    let filteredProducts = [...products];

    if(sortOrder === "low-high") {
      filteredProducts.sort((a,b) => a.price - b.price);
    }

    if(sortOrder === "high-low") {
      filteredProducts.sort((a,b) => b.price - a.price);
    }

    */

/*
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
        
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
             // to={`/product/${product.id}`}
              key={product.Id}
              className="product-link"
              onClick={() => {
                setProduct(product)
              }}
            >
              <div className="product-card">
              <img 
                src={JSON.parse(product.Images || "[]")[0]} 
                alt={product.Name} 
                loading="lazy" 
              />  
                <h3>{product.Name}</h3>
                <p>₹{product.Price}</p>
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
                
                <h2>{product.name}</h2>  

              <div className="slider">
                <button className="arrow left" onClick={prevImage}>
                 ❮
                 </button>

              <img
                src={getImages(product)[currentImage]}
                className="slider-image"
                alt=""
                  />

              <button className="arrow right" onClick={nextImage}>
                ❯
              </button>
            </div>

            <div className="image-indicators">
              {JSON.parse(product.Images || "[]").map((_, index) => (
                <span
                  key={index}
                  className={
                    index === currentImage 
                     ? "dot active-dot"
                      : "dot"
                    }
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>
                <p>₹{product.price}</p>
                </div>
            </div>  
             )}
               </section>  
    );
  

            */


  return (
    <div className="category-page">
      <h2>WOMEN'S COLLECTION</h2>

    <div className="filters">
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>

      <div className="products-grid">
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => {
              setSelectedProduct(product);
              setCurrentImage(0);
            }}
          >
            <img src={product.images[0]} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              X
            </button>

            {/*   <h2>{selectedProduct.name}</h2> */}

            <div className="slider">
              <button
                className="arrow left"
                onClick={() =>
                  setCurrentImage(
                    currentImage === 0
                      ? selectedProduct.images.length - 1
                      : currentImage - 1,
                  )
                }
              >
                ❮
              </button>

              <img
                src={selectedProduct.images[currentImage]}
                className="slider-image"
              />

              <button
                className="arrow right"
                onClick={() =>
                  setCurrentImage(
                    currentImage === selectedProduct.images.length - 1
                      ? 0
                      : currentImage + 1,
                  )
                }
              >
                ❯
              </button>
            </div>

            <div className="image-indicators">
              {selectedProduct.images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${
                    currentImage === index ? "active-dot" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>

            {/*<p>₹{selectedProduct.price}</p> */}
          </div>
        </div>
      )}
    </div>
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
