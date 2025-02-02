import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';  // Import the delete (trash) icon from react-icons
import Header from '../Header';
import './index.css'; // Ensure appropriate CSS is applied for styling

const MyBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Get the blog data from localStorage
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(storedBlogs);
    }, []);

    const handleDelete = (index) => {
        const updatedBlogs = blogs.filter((_, i) => i !== index); // Remove the selected blog
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); // Update localStorage
    };

    return (
        <>
            <Header />
            <div className="my-blogs-container">
                <h1 className='header-title'>My Movie Blogs</h1>
                <div className="blogs-list">
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <div className="blog-card" key={index}>
                                <h2>{blog.title}</h2>
                                <p>{blog.content}</p>
                                <div className="rating">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span
                                            key={i}
                                            className={i < blog.rating ? 'star selected' : 'star'}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <p><strong>Feedback:</strong> {blog.feedback}</p>
                                <p><strong>Overall Experience:</strong> {blog.experience}</p>
                                <button className="delete-btn" onClick={() => handleDelete(index)}>
                                    <FaTrash className='trash'/> {/* Add the trash icon here */}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className='desc'>No blogs available. Please create a blog first!</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyBlogs;
