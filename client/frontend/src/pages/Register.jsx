import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to register the user
            const response = await axios.post("http://localhost:5000/register", { username, email, password });

            if (response.status === 201 || response.status === 200) {
                // Save user data to localStorage for future login validation
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                registeredUsers.push({ email, password });
                localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

                // Show a success alert
                alert("✅ Registration Successful! Please login.");

                // Redirect to login page
                navigate("/Login");
            } else {
                alert("❌ Registration Failed. Try Again.");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("❌ Email already exists. Try a different email.");
            } else {
                alert("❌ Server error. Please try again later.");
            }
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="auth-container">
                    <div className="auth-box">
                        <h2>REGISTER</h2>
                        <form onSubmit={handleRegister}>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit">Register</button>
                        </form>
                        <p>Already have an account? <Link to="/Login">Login</Link></p>
                    </div>
                </div>
            </div>

             {/* Footer */}
                 <footer style={{ backgroundColor: 'black', padding: '40px', color: '#fff', marginTop: '40px', position: 'relative' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                     {/* Brand Info */}
                     <div style={{ flex: '1', padding: '10px', marginRight: '50px' }}>
                       <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'rgb(255, 89, 0)', marginBottom: '10px' }}>RECIPE BOOK</h2>
                       <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                         Discover a world of flavors with our vast collection of recipes, shared by food lovers worldwide.
                       </p>
                     </div>
           
                     {/* Footer Links */}
                     <div style={{ flex: '1', padding: '10px', marginLeft: '70px' }}>
                       <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'Red' }}>Company</h3>
                       <p><Link to="/Home" style={{ color: '#D3D3D3', textDecoration: 'none' }}>Home</Link></p>
                       <p><Link to="/Recipes" style={{ color: '#D3D3D3', textDecoration: 'none' }}>Recipes</Link></p>
                       <p><Link to="/Recipeform" style={{ color: '#D3D3D3', textDecoration: 'none' }}>Recipe form</Link></p>
                     </div>
           
                     <div style={{ flex: '1', padding: '10px', marginLeft: '30px' }}>
                       <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'Red' }}>Contact</h3>
                       <p><Link to="https://instagram.com" style={{ color: '#D3D3D3', textDecoration: 'none' }}>Instagram</Link></p>
                       <p><Link to="https://facebook.com" style={{ color: '#D3D3D3', textDecoration: 'none' }}>Facebook</Link></p>
                     </div>
                   </div>
           
                   {/* Copyright */}
                   <p style={{ textAlign: 'left', marginTop: '20px', fontSize: '0.8rem', color: '#ccc' }}>
                     &copy; {new Date().getFullYear()} RecipeBook. All Rights Reserved.
                   </p>
                 </footer>
        </div>
    );
};

export default Register;
