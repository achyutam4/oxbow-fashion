import { useEffect,useState } from "react";
import axios from "axios";

function AdminProducts(){

    const[products, setProducts] = useState([]);

    const loadProducts = async() => {   
        const res = await axios.get(
            "https://mybackendapi123-d4e2fzh5gpbqhwfd.centralindia-01.azurewebsites.net/api/Products"
        );
        
        setProducts(res.data);
    };

    useEffect(() => {
        loadProducts(); 
    },[]);

    return(
        <div>
            <h2>All Products</h2>

            {products.map(p =>(
                <div key ={p.Id}>
                    <h3>{p.Name}</h3>
                    <p>{p.Price}</p>
                    <p>{p.Category}</p>
                    console.log(products)
            </div>  
            ))} 
        </div>
    );
}   

export default AdminProducts;
    