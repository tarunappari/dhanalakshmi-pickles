import useProducts from "@/lib/hooks/useProducts";
import React, { useEffect } from "react";
import styles from "@/styles/common/main/ProductsCollection.module.scss";
import { ProductCard } from "../ProductCard";
import bgImg from "@/public/assets/offers.png";
import Image from "next/image";
import CouponCard from "../CouponCard";

const OffersCollection = ({ title }) => {
  const { products, loading, error, fetchProducts } = useProducts();

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className={styles.collectionsContainer}>
        <div className={styles.title}>
          <h1>New Arrivals</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.collectionsContainer}>
        <div className={styles.title}>
          <h1>New Arrivals</h1>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.collectionsContainer}>
      <div className={styles.imgContainer}>
        <Image src={bgImg} alt="bg" />
      </div>
      <div className={styles.offersContentContainer}>
        <h2>Limited-Time Deals</h2>
        <p>
          Unlock special savings on hand-picked plants and garden essentials.
        </p>

        <div>
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
      </div>
      <div className={styles.ProductsCollection}>
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
      <div className={styles.collectionInfo}>
        <div>
          <h3>●Plants at Home: Bring Home Nature’s Gateway</h3>
          <p>
            Bringing plants home has been a practice for ages now. But have you
            ever wondered how that really works and why people keep doing so?
            There's something magical about having live plants in your space.
            Not only do they bring a slice of nature indoors or to your outdoor
            gardens but they also bring with them a variety of benefits. They
            promote an unparalleled sense of tranquility and with Ugaoo’s
            easy-to-use online platform, you can buy live plants online and
            experience the joy of nature’s gateways at your fingertips.
          </p>
        </div>
        <div>
          <h3>●Benefits of Keeping Live Plants Indoors</h3>
          <div>
            <p>
              1. Live plants enhance the visual appeal of any indoor space and
              bring nature indoors with them. With the vibrant colors of
              flowering plants and the distinguished foliage of other indoor
              plants, you can effortlessly elevate the decor and vibe of your
              living or office space. Green plants also create a calming and
              refreshing atmosphere, promoting relaxation and tranquility.
            </p>
            <p>
              2. Live plants act as natural air purifiers. They help remove
              harmful toxins such as formaldehyde, benzene, and carbon monoxide
              from the air. This means that, in turn, they release oxygen
              through photosynthesis, improving indoor air quality and making
              your home healthier to breathe in.
            </p>
            <p>
              3. Whether you buy plants from the store or order plants online,
              caring for plants is a very rewarding hobby. The simple process of
              tending to plants can be therapeutic, which reduces stress and
              promotes a sense of accomplishment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCollection;
