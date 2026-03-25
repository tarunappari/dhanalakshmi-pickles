"use client"
import { useEffect } from 'react';
import { useProducts } from '@/lib/hooks/useProducts';
import styles from '@/styles/shop/Plants.module.scss'
import { PlantCard } from '../common/PlantCard';

const Plants = () => {
  // Use custom hook for cleaner code
  const {
    products,
    loading,
    error,
    fetchProducts
  } = useProducts();

  useEffect(() => {
    // Fetch products when component mounts
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className={styles.plantsContainer}>
        <div className={styles.title}>
          <h1>New Arrivals</h1>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.plantsContainer}>
        <div className={styles.title}>
          <h1>New Arrivals</h1>
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.plantsContainer}>
      <div className={styles.title}>
        <h1>New Arrivals</h1>
        <p>Featured</p>
      </div>
      <div className={styles.plantCardsContainer}>
        {/* {Array.from({ length: 12 }).map((_, index) => (
          <PlantCard key={index} />
        ))} */}

        {products.map((product, index) => (
          <PlantCard key={product.id || index} product={product} />
        ))}

      </div>
    </div>
  )
}

export default Plants;