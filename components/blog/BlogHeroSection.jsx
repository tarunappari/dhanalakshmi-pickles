import React from "react";
import styles from "@/styles/blog/BlogHeroSection.module.scss";
import blog1 from "@/public/assets/decors/village.png";
import Image from "next/image";
import cover from "@/public/assets/blog/cover.png";

const BlogHeroSection = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroImg}>
          <Image src={cover} alt="hero" />
        </div>
      </div>

      <div className={styles.storiesSection}>
        <div className={styles.storiesTitle}>
          <h1>Stories We Grew Up With</h1>
          <p>Once Upon a Time… Under Ammamma's Tree 🌙</p>
          <p>
            Before screens, before noise… there were stories, laughter, and
            little hearts listening with wonder. ✨
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
                On our walk home, we believed the moon followed us. With Amma
                beside us, those quiet village nights felt like pure magic. ✨🌾
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
                No matter how often we asked, she never repeated a story. Under
                the lantern light, her words created worlds we still carry. 💛🪔
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
                When lights went off, magic began. Candlelight, rain sounds, and
                stories made those nights warmer than electricity. 🌙💫
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
                The village parrot repeated everything it heard. From gossip to
                secrets, we waited daily to hear its next surprise. 😄🌿
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
                As the village slowed in the heat, we gathered for stories that
                made even the quietest afternoons feel alive. 🌿💛
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
                Around small fires, we shared stories of laughter and wonder.
                Those glowing nights still live in our memories. 🌙✨
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2>A Feeling That Never Fades</h2>
        <p>
          We may grow up, move away, and forget many things… but somewhere deep
          inside, those stories still live within us. 🌙✨
        </p>
        <button>Relive More Stories</button>
      </div>
    </div>
  );
};

export default BlogHeroSection;
