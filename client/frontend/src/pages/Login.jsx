import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
          // Send login request to backend
          const res = await axios.post("http://localhost:5000/login", { email, password });
  
          if (res.data.message === "User not found") {
              alert("🚨 ERROR: You are a new user! Please register first.");
              return;
          }
  
          // Store login details in MongoDB (handled in backend)
          localStorage.setItem("username", res.data.username);
          setIsLoggedIn(true);
          navigate("/Home");
      } catch (error) {
          alert("❌ Invalid Credentials");
      }
  };
  

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="auth-container">
                    <div className="auth-box">
                        <h2>LOGIN</h2>
                        <form onSubmit={handleLogin}>
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
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <Link to="/Register">Register</Link></p>
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
}

export default Login;
