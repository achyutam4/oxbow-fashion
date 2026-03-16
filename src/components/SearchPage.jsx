import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./SearchPage.css";

function SearchPage() {
    const { query } = useParams();

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h2>Search Results for "{query}"</h2>

            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <Link key={product.id} to={`product/${product.id}`}>
                            <div className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>₹ {product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;
