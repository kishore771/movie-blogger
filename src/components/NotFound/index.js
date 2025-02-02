import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className='title'>404 - Page Not Found</h1>
            <p className='message'>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className='link'>Go to Home</Link>
        </div>
    );
};

export default NotFound;