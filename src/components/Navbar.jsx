    import {Link} from "react-router-dom";
    import { FaUser, FaRegHeart, FaShoppingCart, FaSearch  } from "react-icons/fa";
    import "./Navbar.css"
    import { useState,useContext } from "react";
    import { useNavigate } from "react-router-dom";
    import {CartContext} from "../context/CartContext";

    function Navbar({isLoggedIn,setIsLoggedIn}) {

    const[showDropDown, setShowDropDown] = useState(false);
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce(
        (total,item) => total + item.quantity,
        0
    );
    const [query, setQuery] = useState('');

    return (
    
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
      <img src="/src/assets/oxbow.png" alt="oxbow"/>
      </Link> 
   </div>
      
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/women">Women</Link></li>
      <li><Link to="/kids">Kids</Link></li>
      <li><Link to="/accessories">Accessories</Link></li>
    </ul>

      <img src="/src/assets/oxbow.png" alt="oxbow" width="115px" height="45px" className="logo-hidden logo "/>    


   {/*/
    <div className="nav-right">
   
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim() !== "") {
            navigate(`/search/${query}`);
            setQuery("");
          }
        }}
      >
        
        <input
          type="search"
          placeholder="Search..."
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          enterKeyHint="search"
        />
      
        <button type="submit" className="search-button">
          <FaSearch />
        </button> 
        
      </form>
    */}
    {/*   
      <Link to="/wishlist" className="icon">
        <FaRegHeart />
      </Link>

      <div className="user-section">
        <button
          className="icon"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <FaUser />
        </button>

        {showDropDown && (
          <div className="dropdown">
            {!isLoggedIn ? (
              <>
                <p onClick={() => setIsLoggedIn(true)}>Login</p>
                <p onClick={() => setIsLoggedIn(true)}>SignUp</p>
              </>
            ) : (
              <>
                <p>Welcome, User</p>
                <p onClick={() => setIsLoggedIn(false)}>Logout</p>
              </>
            )}  
          </div>
        )}
      </div>

      <button onClick={() => navigate("/cart")} className="icon">
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
          
    </div>
    */}
  </nav>

  
);
  }

    export default Navbar;