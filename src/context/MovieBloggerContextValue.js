// MovieBloggerContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the blog data (renamed to MovieBloggerContextValue)
const MovieBloggerContextValue = createContext();

// Create a provider component
export const MovieBloggerProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(() => {
        // Try to load blogs from localStorage, else default to empty array
        const savedBlogs = localStorage.getItem('blogs');
        return savedBlogs ? JSON.parse(savedBlogs) : [];
    });

    const addBlog = (newBlog) => {
        const updatedBlogs = [...blogs, newBlog];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); // Save to localStorage
    };

    return (
        <MovieBloggerContextValue.Provider value={{ blogs, addBlog }}>
            {children}
        </MovieBloggerContextValue.Provider>
    );
};

// Custom hook to use the MovieBloggerContextValue
export const useMovieBlogger = () => useContext(MovieBloggerContextValue);

