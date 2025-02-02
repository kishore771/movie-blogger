import React from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import './index.css';
const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/blog-item');
    };
    return (
        <>
         <Header />
        <div className="home-container">
            <div className="home-card">
            <h1 className='header-title'>Welcome to Movie Blogger</h1>
            <p className='header-desc'>Your source for the latest movie reviews and news.</p>
            <button onClick={handleButtonClick} className='blog-btn'>Create your Blog</button>
        </div>  
        </div>
        </>
    );
};

export default Home;