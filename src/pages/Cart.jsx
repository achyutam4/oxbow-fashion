import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
    const {
         cart,
         removeFromCart,
         increaseQuantity,
         decreaseQuantity,
         totalPrice,
    } = useContext(CartContext);

    return(
        <div style ={{padding:"20px"}}>
            <h2>Your Cart</h2>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map((item) => (
                <div key={item.id} style={{marginBottm:"20px"}}>
                    <img src={item.image} width="100" />
                    <h3>{item.name}</h3>
                    <p>Rs {item.price}</p>

                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span style={{margin: "0 10px"}}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>

                <br /><br />

                <button onClick={() => removeFromCart(item.id)}>
                    Remove
                </button>
                </div>
             ))}

             <h3>Total : Rs{totalPrice}</h3>
        </div>
    );
}


export default Cart;
