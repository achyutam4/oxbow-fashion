import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if(token){
            navigate("/admin/upload");
        }
    }, []);

    const login = async() => {
        try{
            await axios.post(
                "https://mybackendapi123-d4e2fzh5gpbqhwfd.centralindia-01.azurewebsites.net/api/auth/login",
                {username,password}
            );

            localStorage.setItem("admin","true");
            navigate("/admin/upload");

        }catch {
            alert("Invalid Login");
        }
    };

    return(
        <div className="admin-login-container">
            <div className="admin-login-box">
                
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
    </div>
    );
}

export default AdminLogin;
