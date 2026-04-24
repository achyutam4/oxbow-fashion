import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const login = async() => {
        try{
            await axios.post(
                "https://localhost:7082/api/auth/login",
                {username,password}
            );

            localStorage.setItem("admin","true");
            navigate("/admin/upload");

        }catch {
            alert("Invalid Login");
        }
    };

    return(
        <div>
            <h2>Admin Login</h2>
        
        <input 
        placeholder="username"
        onChange = {(e)=>setUsername(e.target.value)}/>
        
        <input
        type ="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
    /> 

    <button onClick={login}>Login</button>
    </div>
    );
}

export default AdminLogin;
