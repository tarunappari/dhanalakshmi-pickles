import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { blogData } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog/BlogPost.module.scss';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';
import Script from 'next/script';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    blogId: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const post = blogData.find((p) => p.id === blogId);

  if (!post) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.fullStory.substring(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.fullStory.substring(0, 160) + '...',
      url: `https://venkatraogarivantillu.com/blog/${blogId}`,
      images: [
        {
          url: post.image?.src || "/favicon.ico",
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: [post.author || "Venkatraogari Vantillu"],
    },
    alternates: {
      canonical: `/blog/${blogId}`,
    },
  };
}

const BlogPost = async ({ params }) => {
  const { blogId } = await params;
  const post = blogData.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Story not found 🌿</h2>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": `https://venkatraogarivantillu.com${post.image?.src || "/favicon.ico"}`,
    "author": {
      "@type": "Person",
      "name": post.author || "Venkatraogari Vantillu"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Venkatraogari Vantillu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://venkatraogarivantillu.com/favicon.ico"
      }
    },
    "datePublished": post.date ? new Date(post.date).toISOString() : undefined,
    "description": post.excerpt || post.fullStory.substring(0, 160) + '...'
  };

  return (
    <div className={`${styles.pageContainer} pageContainer`}>
      <Script
        id={`article-schema-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <div className={styles.postContainer}>
        <div className={styles.heroImageContainer}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.overlay}></div>
        </div>
        
        <div className={styles.contentWrapper}>
          <FadeInWhenVisible>
            <Link href="/blog" className={styles.backButton}>
              ← Back to Stories
            </Link>
            <div className={styles.metaData}>
                <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <h1>{post.title}</h1>
            <div className={styles.divider}></div>
            <div className={styles.storyContent}>
              {post.fullStory.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;