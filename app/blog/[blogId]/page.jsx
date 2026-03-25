import BlogPost from '@/components/blog/blogpost/BlogPost';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import BlogCard from '@/components/blog/BlogCard';

const blog = () => {
  return (
    <div>
        <Navbar />
        <BlogPost />
        <div className={styles.realtedBlogsInBlogPost}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
        <Footer />
    </div>
  )
}

export default blog;