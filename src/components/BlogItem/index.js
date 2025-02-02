import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './index.css';

const BlogItem = () => {
    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [content, setContent] = useState(localStorage.getItem('content') || '');
    const [rating, setRating] = useState(localStorage.getItem('rating') || null); 
    const [feedback, setFeedback] = useState(localStorage.getItem('feedback') || '');
    const [experience, setExperience] = useState(localStorage.getItem('experience') || '');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleFeedbackChange = (e) => setFeedback(e.target.value);
    const handleExperienceChange = (e) => setExperience(e.target.value);
    const handleRatingChange = (newRating) => setRating(newRating);

    useEffect(() => {
        localStorage.setItem('title', title);
        localStorage.setItem('content', content);
        localStorage.setItem('rating', rating);
        localStorage.setItem('feedback', feedback);
        localStorage.setItem('experience', experience);
    }, [title, content, rating, feedback, experience]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Check if any input is missing
        if (!title || !content || !rating || !feedback || !experience) {
            alert('Please fill in all fields!');
            return;
        }

        const blogData = {
            title,
            content,
            rating,
            feedback,
            experience,
        };

        // Store the blog data in localStorage
        const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        existingBlogs.push(blogData);
        localStorage.setItem('blogs', JSON.stringify(existingBlogs));

        alert('Blog post submitted!');

        // Clear form fields
        setTitle('');
        setContent('');
        setRating(null);
        setFeedback('');
        setExperience('');
    };

    return (
        <>
            <Header />
            <div className="blog-container">
                <h1>Create a New Blog Post</h1>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className='form-group'>
                        <label htmlFor="title" className='labels'>Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            className='title'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={handleContentChange}
                            className='content'
                        />
                    </div>
                    <div className='form-group'>
                        <label className='labels'>Rating:</label>
                        <div className='rating'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={rating >= star ? 'star selected' : 'star'}
                                    onClick={() => handleRatingChange(star)}
                                >
                                    &#9733;
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea
                            id="feedback"
                            value={feedback}
                            onChange={handleFeedbackChange}
                            className='feedback'
                            placeholder="Write your feedback here..."
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="experience" className='label'>Overall Experience:</label>
                        <select
                            id="experience"
                            value={experience}
                            onChange={handleExperienceChange}
                            className='experience'
                        >
                            <option value="">Select an option</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Average">Average</option>
                            <option value="Poor">Poor</option>
                        </select>
                    </div>
                    <button type="submit" className='submit-button'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default BlogItem;
