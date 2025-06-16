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
<p>
  Welcome to <strong>Movie Blogger</strong> — your one-stop destination for sharing and discovering honest, heartfelt, and engaging movie reviews from fellow cinema lovers around the world!
</p>

<p>
  Whether you're into adrenaline-pumping action films, emotional dramas, clever thrillers, heartwarming romances, or laugh-out-loud comedies, Movie Blogger is a platform made just for you.
</p>

<h2>🎥 What We Do</h2>
<ul>
  <li>💬 Provide a space for users to write and publish their own movie reviews.</li>
  <li>⭐ Let users rate and comment on movies they’ve watched.</li>
  <li>📚 Help movie fans discover trending films, hidden gems, and personal recommendations.</li>
</ul>

<h2>👥 Our Community</h2>
<p>
  Movie Blogger is built by and for movie fans. Everyone is welcome to share their thoughts — from first-time bloggers to seasoned critics. It's a creative space to express opinions, experiences, and ratings.
</p>

<h2>📩 Get in Touch</h2>
<p>
  Got a suggestion or just want to say hello? Head over to our <a href="/contact">Contact</a> page. We’d love to hear from you!
</p>

<p>
  Thanks for being a part of our growing film-loving community. Keep blogging, keep watching, and most importantly — keep sharing!
</p>

        </div>
        </div>
        </>
    );
};

export default About
