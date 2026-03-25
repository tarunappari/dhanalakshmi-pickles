"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import plantImg from '@/public/assets/plant/plantAbout.jpg'
import styles from '@/styles/shop/plant/Plant.module.scss'
import Star from '@/public/assets/icons/star.svg'
import TruckSvg from '@/public/assets/icons/truck.svg'
import GiftSvg from '@/public/assets/icons/gift.svg'
import ReturnSvg from '@/public/assets/icons/return.svg'
import stylesAccordian from '@/styles/shop/Sidebar.module.scss'
import PlantCard from '../PlantCard';
import Cart from '@/components/cart/Cart';
import { useProducts } from '@/lib/hooks/useProducts';

const Plant = ({ handle = "default-plant", product: preloadedProduct = null }) => {

  const {
    currentProduct,
    productLoading,
    error,
    fetchProductByHandle,
    products,
    fetchProducts,
    setCurrentProduct
  } = useProducts();

  // Set preloaded product if available
  useEffect(() => {
    if (preloadedProduct) {
      setCurrentProduct(preloadedProduct);
    }
  }, [preloadedProduct, setCurrentProduct]);

  // Fetch the specific product by handle if not preloaded
  useEffect(() => {
    if (handle && !preloadedProduct) {
      fetchProductByHandle(handle);
    }
    // Always fetch all products for recommendations
    fetchProducts();
  }, [handle, preloadedProduct, fetchProductByHandle, fetchProducts]);

  // Loading state
  if (productLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Error loading product</h2>
        <p>{error}</p>
        <button onClick={() => fetchProductByHandle(handle)}>
          Try Again
        </button>
      </div>
    );
  }

  // Product not found
  if (!currentProduct) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Extract product data with fallbacks
  const productImages = currentProduct.images?.edges || [];
  const productTitle = currentProduct.title || 'Plant & Pot';
  const productDescription = currentProduct.description || 'Beautiful plant for your home';
  const productPrice = currentProduct.priceRange?.minVariantPrice?.amount || '0.00';
  const productCurrency = currentProduct.priceRange?.minVariantPrice?.currencyCode || 'USD';
  const productTags = currentProduct.tags || [];

  return (
    <div>
      <div className={styles.plantContainer}>
        <div className={styles.plantImgs}>
          {productImages.length > 0 ? (
            productImages.map((imageEdge, index) => (
              <div key={index} className="imgContainerr">
                {index === 0 && <div className="off">30% off</div>}
                <img
                  src={imageEdge.node.url}
                  alt={imageEdge.node.altText || productTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </div>
            ))
          ) : (
            // Fallback to default images if no product images
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="imgContainerr">
                {index === 0 && <div className="off">30% off</div>}
                <Image src={plantImg} alt='img' layout='fill' objectPosition='center' objectFit='cover' />
              </div>
            ))
          )}
        </div>
        <div className={styles.plantInfo}>
          <div className={styles.firstSection}>
            <span style={{ fontSize: '0.9rem' }}>
              {productTags.length > 0 ? productTags.join(' / ') : 'Plant & Pot / Countertop'}
            </span>
            <div className={styles.plantTitle}>
              <h2>{productTitle}</h2>
              <div>
                <span style={{ textDecoration: 'line-through' }}>
                  {productCurrency} {(parseFloat(productPrice) * 1.3).toFixed(2)}
                </span>
                <span style={{ color: 'black' }}>
                  {productCurrency} {productPrice}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', marginTop: '-0.3rem' }}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <span style={{ paddingLeft: '0.5rem', fontSize: '0.9rem' }}>5.0 (2 Reviews)</span>
            </div>
            <div className={styles.coloumnContainer}>
              <span>Tags</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {productTags.length > 0 ? (
                  productTags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: '#e9ecef',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        color: '#495057'
                      }}
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <div className={styles.colorDiv}><div></div></div>
                )}
              </div>
            </div>
            <div className={styles.coloumnContainer}>
              <span>Size</span>
              <div className={styles.sizeContainer}>48x23x12</div>
            </div>
            <Cart />
          </div>
          <div className={styles.secondSection}>
            <div>
              <TruckSvg />
              <div>
                <h2>Free Shipping</h2>
                <p>On all orders. <span>Learn more.</span></p>
              </div>
            </div>
            <div>
              <ReturnSvg />
              <div>
                <h2>Easy Returns</h2>
                <p>Extended returns through. <span>Returns Details.</span></p>
              </div>
            </div>
            <div>
              <GiftSvg />
              <div>
                <h2>Send It As A Gift</h2>
                <p>Add a free personalized note during checkout.</p>
              </div>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <h2>{productTitle}</h2>
            <p>Introducing your new favourite addition to any indoor garden. The EcoPot® Planter features all the classic design elements—smooth curves, a drainage hole for excess water, and a sturdy base, along with two side handles for easy lifting. The interior is lined with a breathable fabric to promote healthy root growth, and it’s crafted from 100% recycled materials. Think vibrant, lush, and effortlessly stylish. With a commitment to sustainability, EcoPot® aims to minimise waste and promote eco-friendly gardening practices, ensuring that every planter contributes to a greener planet.</p>
            <div>
              <h3>Material</h3>
              <p>Ceramic</p>
            </div>
          </div>
          <div className={styles.fourthSection}>
            <Accordion type="single" collapsible className={`w-full ${stylesAccordian.accordianContainer}`}>
              <AccordionItem value="item-1" className={stylesAccordian.accordianItem} >
                <AccordionTrigger className={styles.accordianTrigger}>How to Care</AccordionTrigger>
                <AccordionContent className={styles.accordionContent}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum recusandae veniam placeat asperiores maiores consequatur voluptates delectus dolorum tempora, fuga provident saepe doloribus officiis ex nam! Expedita ullam soluta fugiat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={styles.recommended}>
        <div className="title">
          Recomended Products
        </div>
        <div>
          {products && products.length > 0 ? (
            products.slice(0, 5).map((product, index) => (
              <PlantCard key={product.id || index} product={product} />
            ))
          ) : (
            // Fallback to empty cards if no products loaded
            Array.from({ length: 5 }).map((_, index) => (
              <PlantCard key={index} product={null} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Plant;