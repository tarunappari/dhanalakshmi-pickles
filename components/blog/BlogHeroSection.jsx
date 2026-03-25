import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import BlogCard from './BlogCard';
import BlackBtn from '../common/BlackBtn';
import BlogInitiatives from './BlogInitiatives';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const BlogHeroSection = () => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <FadeInWhenVisible >
                    <h1>Aranya</h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.25}>
                    <p>We’re on a mission to cozy up your home. </p>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.5}>
                    <p>These are the people, stories, and ideas that will help us get there.</p>
                </FadeInWhenVisible>
            </div>
            <div className={styles.latestBlogs}>
                <h2>The Latest</h2>
                <div className={styles.blogCardsContainer}>
                    <FadeInWhenVisible direction='bottom' delay={0}>
                        <BlogCard />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.25}>
                        <BlogCard />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.5}>
                        <BlogCard />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.75}>
                        <BlogCard />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={1}>
                        <BlogCard />
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={1.25}>
                        <BlogCard />
                    </FadeInWhenVisible>
                </div>
                <FadeInWhenVisible effect='bounce'>
                    <BlackBtn text={'Load more Articles'} />
                </FadeInWhenVisible>
            </div>
            <BlogInitiatives />
        </div>
    )
}

export default BlogHeroSection;