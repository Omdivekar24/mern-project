import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundColor: '#fff', color: '#333', paddingTop: '80px' }}>
      {/* Hero Section */}
      <div className="hero-section" style={{ position: 'relative', textAlign: 'left' }}>
        <img 
          src="/banner.jpeg" 
          className="hero-img" 
          alt="Delicious Food" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
        <div className="hero-content" style={{
          position: 'absolute',
          top: '50%',
          left: '10%', 
          transform: 'translateY(-50%)',
          maxWidth: '40%',
          textShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
            <span style={{ color: '#000' }}>Adventure</span> <br /> 
            <span style={{ color: '#FA2A55' }}> of Delicacies</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#4A4A4A' }}>
            Unlock a world of variety culinary recipes and unleash your inner chef the easy way with us.
          </p>
        </div>

        {/* Explore Recipes Button */}
        <Link to="/Recipes" className="explore-btn" style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '8px 10px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          position: 'absolute',
          bottom: '10px',
          left: '30px',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}>
          Explore Recipes
        </Link>
      </div>

      {/* New Compact Section with Image on Right */}
      <div className="info-container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '95%', 
        margin: '20px auto', 
        backgroundColor: '#e0e0e0', 
        padding: '15px', 
        borderRadius: '10px' 
      }}>
        
       {/* New Section Below Banner */}
       <div className="info-section" style={{ 
        backgroundColor: '#e0e0e0', 
        padding: '5px', 
        width: '60%', 
        margin: '10px auto', 
        textAlign: 'left',
        borderRadius: '10px'
      }}>
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '40px', 
          maxWidth: '1000px', 
          margin: '0 auto'
        }}>
          <div style={{ padding: '10px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#d32f2f' }}>User-Centered</h3>
            <p style={{ fontSize: '1rem', color: '#4A4A4A' }}>
              We prioritize user experience by providing easy navigation, intuitive design, and personalized recipe recommendations.
            </p>
          </div>
          <div style={{ padding: '10px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#d32f2f' }}>Diverse Recipes</h3>
            <p style={{ fontSize: '1rem', color: '#4A4A4A' }}>
              Explore a wide range of recipes from different cuisines, dietary preferences, and cooking styles to suit every taste.
            </p>
          </div>
          <div style={{ padding: '10px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#d32f2f' }}>Fun Community</h3>
            <p style={{ fontSize: '1rem', color: '#4A4A4A' }}>
              Join a vibrant community of food lovers, share your creations, and connect with others who have a passion for cooking.
            </p>
          </div>
        </div>
        </div>

        {/* Image on the Right */}
        <div style={{ flex: '1', textAlign: 'center' }}>
          <img src="/imgsec.jpeg" alt="About Us" style={{
            width: '100%', 
            maxWidth: '400px', 
            height: 'auto', 
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)'
          }} />
          <p style={{ fontSize: '0.9rem', color: 'black', marginTop: '10px' }}>
            Discover recipes, share ideas, and be a part of our vibrant community.
          </p>
        </div>
      </div>
              


      


      {/* Cuisine Section */}
      <div className="cuisine-section" style={{ 
        backgroundImage: "url('/whiteback.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed', 
        padding: '80px 20px',
        position: 'relative',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          padding: '50px', 
          borderRadius: '10px', 
          maxWidth: '1200px', 
          margin: '0 auto',
          color: '#333' 
        }}>
          <h2 style={{ color: '#d32f2f', marginBottom: '20px', fontSize: '28px', fontWeight: 'bold' }}>CUISINES</h2>

          {/* Recipe Categories */}
          <div className="recipe-categories" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '30px', 
            padding: '20px', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            {[ 
              { title: "Vegetarian Delights", desc: "Find the best vegetarian dishes packed with flavors.", img: "/vegcusine.jpeg" },
              { title: "Meat Lovers' Heaven", desc: "Explore delicious meat-based recipes for every taste.", img: "/nonveg-recipes.jpeg" },
              { title: "South Indian Magic", desc: "Enjoy the rich and aromatic flavors of South India.", img: "/southindian.jpeg" },
              { title: "Tasty Snacks", desc: "Quick and tasty snack recipes for every occasion.", img: "/snacks.jpeg" },
              { title: "Desserts & Sweets", desc: "Indulge in the sweetest treats and desserts.", img: "/dessert.jpeg" },
              { title: "Healthy Eats", desc: "Nutritious and delicious meals for a healthy lifestyle.", img: "/healthy.jpeg" }
            ].map((category, index) => (
              <div className="category-card" key={index} style={{ 
                backgroundColor: '#e0e0e0', 
                borderRadius: '10px', 
                padding: '15px', 
                textAlign: 'center', 
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)', 
                transition: 'transform 0.3s', 
                cursor: 'pointer', 
                position: 'relative', 
                overflow: 'hidden',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '400px' 
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)' }>
                
                <h5 style={{ 
                  color: '#d32f2f', 
                  fontSize: '22px', 
                  fontWeight: 'bold', 
                  marginBottom: '10px' 
                }}>
                  {category.title}
                </h5>
                
                <img src={category.img} alt={category.title} style={{ 
                  width: '90%', 
                  height: '60%', 
                  objectFit: 'cover', 
                  borderRadius: '10px' 
                }} />
                
                <p style={{ fontSize: '14px', marginTop: '10px', padding: '0 10px' }}>
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
               {/* Image Below Cuisine Section */}
      <div className="image-section" style={{
        position: 'relative',
        width: '100%',
        margin: '40px 0',
        textAlign: 'center'
      }}>
        <img src="/lowerimg.jpeg" style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          transform: 'translateY(-50%)',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#d32f2f' }}>Let's Get</h2>
          <h3 style={{ fontSize: '6rem', fontWeight: 'bold', color: '#333' }}>Into Cooking!</h3>
        </div>

        {/* Explore Recipes Button Positioned at Bottom Right Over Image */}
        <Link to="/Recipes" className="explore-btn" style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '12px 16px',
          borderRadius: '20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          transition: 'all 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}>
          Explore Recipes
        </Link>
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

export default Home;
