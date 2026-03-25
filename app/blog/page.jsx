import BlogHeroSection from '@/components/blog/BlogHeroSection';
import Navbar from '@/components/common/Navbar';
import WhiteBgButton from '@/components/common/WhiteBgButton';
import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import Footer from '@/components/common/Footer';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogHeroSection />
      <div className={styles.blogSocialSection}>
        <FadeInWhenVisible>
          <h1>Follow us on social for more</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible effect='bounce' delay={0.25}>
          <WhiteBgButton text={'//Instagram-Handle//'} />
        </FadeInWhenVisible>
      </div>
      <Footer />
    </div>
  )
}

export default Blog;