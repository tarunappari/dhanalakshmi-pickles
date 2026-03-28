import React from "react";
import styles from "@/styles/blog/BlogHeroSection.module.scss";
import blog1 from "@/public/assets/decors/village.png";
import Image from "next/image";
import story from '@/public/assets/blog/story.png'

const BlogHeroSection = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.heroSection}>
        <div className={styles.title}>
          <h1>Ammamma Chepina Kathalu❤️📖</h1>
          <p>Once Upon a Time… Under Ammamma's Tree 🌙</p>
          <p>
            Before screens, before noise… there were stories, laughter, and
            little hearts listening with wonder. ✨
          </p>
        </div>
        <div className={styles.heroImg}>
            <Image src={story} alt="hero" />
        </div>
      </div>

      <div className={styles.storiesSection}>
        <div>
          <h1>Stories We Grew Up With</h1>
          <p>
            These are the stories that shaped us, taught us, and stayed with us
            forever. ❤️
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>The Moon That Walked With Us 🌙</h3>
              <p>
                Every night on the way back home, we believed the moon followed
                us through the muddy village roads. With Amma beside us and
                silence all around, those little walks felt like magic we never
                questioned. ✨🌾
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>Grandma’s Endless Stories 👵✨</h3>
              <p>
                No matter how many nights we asked, she never repeated a story.
                Sitting under the dim lantern light, her words created worlds we
                still carry in our hearts today. 💛🪔
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>Stories During Power Cuts 🌧️🕯️</h3>
              <p>
                When the lights went off, the real magic began. With candles
                flickering and rain tapping on the roof, those story nights felt
                warmer than any electricity ever could. 🌙💫
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>The Parrot That Knew Secrets 🐦</h3>
              <p>
                They said the village parrot could repeat anything it heard.
                From funny gossip to hidden secrets, we waited every day just to
                hear what it would reveal next. 😄🌿
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>Lazy Summer Afternoons ☀️🌾</h3>
              <p>
                When the sun stood still and the whole village slowed down, we
                gathered around listening to stories that made even the quietest
                afternoons feel alive. 🌿💛
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <Image src={blog1} alt="img" />
            </div>
            <div className={styles.content}>
              <h3>Nights Around the Fire 🔥</h3>
              <p>
                Sitting around small fires in the village, we listened to
                stories filled with laughter, fear, and wonder. Those glowing
                nights still flicker in our memories. 🌙✨
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
