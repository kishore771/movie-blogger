import React from 'react';
import Home from './components/Home';
import About from './components/About';
import MyBlogs from './components/MyBlogs';
import BlogItem from './components/BlogItem';
import ContactUs from './components/ContactUs';
import { MovieBloggerProvider } from './context/MovieBloggerContextValue';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MovieBloggerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route  path='/blog-item' element={<BlogItem />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MovieBloggerProvider>
  );
}

export default App;