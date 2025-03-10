import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  // Fetch login status from backend when component mounts
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', { withCredentials: true });
        if (response.data.isAuthenticated) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleAddRecipeClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert('🚨 ERROR: Please log in before adding a recipe!');
    } else {
      navigate('/Recipeform');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Brand Logo with Slanted Color Effect */}
        <a 
          className="navbar-brand custom-brand" 
          onClick={() => navigate('/home')} 
          style={{ cursor: 'pointer' }}
        >
          RECIPE BOOK
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item nav-hover">
              <Link className="nav-link" to="/Home">HOME</Link>
            </li>
            <li className="nav-item nav-hover">
              <Link className="nav-link" to="/Recipeform" onClick={handleAddRecipeClick}>RECIPE FORM</Link>
            </li>
            <li className="nav-item nav-hover">
              <Link className="nav-link" to="/Recipes">RECIPES</Link>
            </li>
            <li className="nav-item dropdown nav-hover">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                FAVOURITES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/Recipes">Saved Recipes</Link></li>
                <li><Link className="dropdown-item" to="/top-picks">Top Picks</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/recommended">Recommended</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Show Login/Register if not logged in, else show Logout */}
        <div className="d-flex">
          {!isLoggedIn ? (
            <>
              <Link className="btn custom-btn me-3" to="/Login">Login</Link>
              <Link className="btn custom-btn" to="/Register">Register</Link>
            </>
          ) : (
            <button className="btn custom-btn" onClick={() => {
              axios.post('http://localhost:5000/api/users/logout', {}, { withCredentials: true })
                .then(() => {
                  setIsLoggedIn(false);
                  navigate('/Login');
                })
                .catch(error => console.error("Logout failed", error));
            }}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
