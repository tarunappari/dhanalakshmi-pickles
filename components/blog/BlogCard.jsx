import React from 'react'
import styles from '@/styles/blog/BlogHeroSection.module.scss'
import blogImg from '@/public/assets/blog/blogImg.webp'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = () => {

  // const BlogItem = ({ id, title }) => {
  //   const router = useRouter();

  //   return (
  //     <div onClick={() => router.push(`/blog/${id}`)} style={{ cursor: "pointer" }}>
  //       <h3>{title}</h3>
  //     </div>
  //   );
  // };

  return (
    <Link href='/blog/blog-post'>
      <div className={styles.blogCard}>
        <div className={styles.imgContainer}>
          <Image src={blogImg} alt='img' layout="fill" objectFit="cover" objectPosition='center'/>
        </div>
        <div>
          <h3>Blog Title</h3>
          <p>//tag//</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard;