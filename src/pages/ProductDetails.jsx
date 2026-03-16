import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import './ProductDetails.css';
import { BsBag } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductDetails({wishlist,setWishlist}) {
    const {id} = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const[selectedSize,setSelectedSize] = useState("");
    const[selectedColor,setSelectedColor] = useState("");
    const[showReviews, setShowReviews] = useState(false);
    const[isWishlisted, setIsWishlisted] = useState(false);
    const {addToCart} = useContext(CartContext);

    

    if(!product) {
        return <h2>Product not found</h2>;
    }

    return(
        <div className="product-details" >

            <div className="product-image"> 
            <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-info">
             <h2>{product.name}</h2>        
            <span style={{fontSize:"30px"}}>₹ {product.price}</span>
            <span style={{fontSize:"10px"}}>(Inclusive of all taxes)</span>
            <p>{product.description}</p>

             <div className="colors">
                <h4>Select Color:</h4>
                {product.colors.map((color) =>(
                    <button
                        key={color}
                        className={selectedColor === color ? "active": ""}
                        onClick={() => setSelectedColor(color)}
                    >
                    {color}
                    </button> 
                ))}
            </div>

            <div className="sizes">
                <h4>Select Size:</h4>
                {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={selectedSize === size? "active": ""}
                      onClick={() =>setSelectedSize(size)}
                      >
                      {size}
                      </button>
                ))}
            </div>

                <button 
                className="add-to-cart"
                onClick={() => {
                console.log("BUTTON CLICKED");
                 addToCart(product)
                }}
                >
                <BsBag /> Add to Cart
                </button>    

            <button 
                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
            >
                {isWishlisted ? '❤️' : '♡'} Wishlist 
            </button>
            
            <button
                className="reviews-toggle" 
                onClick={() => setShowReviews(!showReviews)}
            >
                {showReviews ? "Hide Customer Reviews" : "Show Customer Reviews"}
            </button>
            
            {showReviews && (
                <div className="reviews">
                    <h3>Customer Reviews</h3>
                    {product.reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <strong>{review.user}</strong>
                            <p>⭐{review.rating}</p> 
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}

          </div>     
        </div>  
    );                                                                               
}

export default ProductDetails;
