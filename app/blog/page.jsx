import BlogHeroSection from '@/components/blog/BlogHeroSection';
import Navbar from '@/components/common/Navbar';
import WhiteBgButton from '@/components/common/WhiteBgButton';
import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import Footer from '@/components/common/Footer';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';

export const metadata = {
  title: "Blog & Stories - Food, Culture & Pickles",
  description: "Read our stories about traditional recipes, Godavari foods and pickles, and the rich pickling culture of Konaseema.",
  alternates: {
    canonical: "/blog",
  },
};

const Blog = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <BlogHeroSection />    
      <Footer />
    </div>
  )
}

export default Blog;
