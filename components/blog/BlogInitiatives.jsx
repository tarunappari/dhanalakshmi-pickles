import React from 'react'
import BlogInitiativeCard from './BlogInitiativeCard'
import styles from '@/styles/blog/BlogInitiative.module.scss'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'

const BlogInitiatives = () => {
    return (
        <div className={styles.blogInitiatives}>
            <h2>Our Initiatives</h2>
            <div className={styles.blogInitiativeCardsContainer}>

                <FadeInWhenVisible>
                    <BlogInitiativeCard />
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.25}>
                    <BlogInitiativeCard />
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={0.5}>
                    <BlogInitiativeCard />
                </FadeInWhenVisible>
            </div>
        </div>
    )
}

export default BlogInitiatives