import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-container">
            <div className='logo-container'>
                <img src='https://i.postimg.cc/bNSyb6d0/DALL-E-2025-01-23-23-10-30-A-simple-and-clean-movie-clapboard-icon-designed-with-a-modern-flat-st.webp' alt='logo' className='logo'/>
                <h1 className='heading'>Movie Blogger</h1>
            </div>
            <nav className="nav desktop-nav">
                <ul className='nav-list'>
                    <Link to="/" className='nav-item'><li>Home</li></Link>
                    <Link to="/my-blogs" className='nav-item'><li>Blog</li></Link>
                    <Link to="/about" className='nav-item'><li>About</li></Link>
                    <Link to="/contact" className='nav-item'><li>Contact</li></Link>
                </ul>
            </nav>
            
            {/* Mobile Dropdown Menu */}
            <div className="mobile-menu">
                <button className="menu-button" onClick={toggleMenu}>
                    ☰
                </button>
                {menuOpen && (
                    <ul className="dropdown-menu">
                        <Link to="/" className='nav-item' onClick={toggleMenu}><li>Home</li></Link>
                        <Link to="/my-blogs" className='nav-item' onClick={toggleMenu}><li>Blog</li></Link>
                        <Link to="/about" className='nav-item' onClick={toggleMenu}><li>About</li></Link>
                        <Link to="/contact" className='nav-item' onClick={toggleMenu}><li>Contact</li></Link>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;
