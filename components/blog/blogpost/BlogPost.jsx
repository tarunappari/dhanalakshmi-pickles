import React from 'react'
import styles from '@/styles/blog/BlogPost.module.scss'

import Image from 'next/image'
import postImg from '@/public/assets/blog/blogpost2.webp'
import postImg2 from '@/public/assets/blog/blogpost3.webp'
import Fb from '@/public/assets/icons/facebook.svg'
import X from '@/public/assets/icons/twitter.svg'
import Ln from '@/public/assets/icons/linkedin.svg'
import Recommendation from './Recommendation'


const BlogPost = () => {
    return (
        <div>
            <div className={styles.heroSection}>
                <h1>Blog Title</h1>
                <p>Description</p>
            </div>
            <div className={styles.blogInfoContainer}>
                <div className={styles.line}></div>
                <div className={styles.mainDescription}>
                    <div className={styles.svgIcons}>
                        <span><X /></span>
                        <span><Fb /></span>
                        <span><Ln /></span>
                    </div>
                    <div className="info">
                        <p>The opening paragraph of a blog should captivate readers by setting the scene and introducing the main theme. It should evoke the essence of the season, inviting them to explore how to elevate their wardrobe with stylish winter whites. By highlighting the versatility of these pieces and hinting at curated selections, it creates anticipation for the content that follows, encouraging readers to envision their own chic winter looks.</p>
                    </div>
                </div>
                <div className={styles.subDescriptionsContainer}>
                    <div>
                        <Image src={postImg} alt='img' />
                    </div>
                    <div className={styles.subDescriptions}>
                        <div>
                            <h2>Sub-Heading 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus justo enim, eu elementum dui tempor fringilla. Nulla facilisi. Donec dignissim elit in eros pharetra commodo. Duis et ante mattis, ultrices dolor id, varius ex. Aenean in commodo purus. Nunc odio diam, auctor ut accumsan et, tristique ornare ante. Morbi ac blandit odio. Suspendisse nec nulla eget dolor vulputate rutrum. Ut egestas nec risus vel tempus. Integer sodales magna sit amet magna commodo, sit amet sagittis massa sodales. Nulla lacinia libero eu nulla lobortis gravida.</p>
                        </div>
                        <div>
                            <h2>Sub-Heading 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus justo enim, eu elementum dui tempor fringilla. Nulla facilisi. Donec dignissim elit in eros pharetra commodo. Duis et ante mattis, ultrices dolor id, varius ex. Aenean in commodo purus. Nunc odio diam, auctor ut accumsan et, tristique ornare ante. Morbi ac blandit odio. Suspendisse nec nulla eget dolor vulputate rutrum. Ut egestas nec risus vel tempus. Integer sodales magna sit amet magna commodo, sit amet sagittis massa sodales. Nulla lacinia libero eu nulla lobortis gravida.</p>
                        </div>
                        <div>
                            <h2>Sub-Heading 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus justo enim, eu elementum dui tempor fringilla. Nulla facilisi. Donec dignissim elit in eros pharetra commodo. Duis et ante mattis, ultrices dolor id, varius ex. Aenean in commodo purus. Nunc odio diam, auctor ut accumsan et, tristique ornare ante. Morbi ac blandit odio. Suspendisse nec nulla eget dolor vulputate rutrum. Ut egestas nec risus vel tempus. Integer sodales magna sit amet magna commodo, sit amet sagittis massa sodales. Nulla lacinia libero eu nulla lobortis gravida.</p>
                        </div>
                    </div>
                    <div>
                        <Image src={postImg2} alt='img' />
                    </div>
                </div>
            </div>
            <Recommendation />
        </div>
    )
}

export default BlogPost;