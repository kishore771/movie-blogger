import React from 'react';
import Header from '../Header';
import './index.css';

const About = () => {
    return (
        <>           
            <Header />
        <div className='about-container'>
        <div className="about-card">
            <h1 className='heading'>About Us</h1>
            <p className='content'>Welcome to Movie Blogger! 
                A place where you store your Movie experiences and also count How many Movies you've watched till date.</p>
        </div>
        </div>
        </>
    );
};

export default About
