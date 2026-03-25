import React from 'react'
import styles from '@/styles/shop/Plants.module.scss'
import plantImg from '@/public/assets/landingpage/category/majorCat.jpg'
import Image from 'next/image';
import Link from 'next/link';

const PlantCard = ({ product }) => {
    // Extract product data with fallbacks
    const title = product?.title || 'Product Title';
    const price = product?.priceRange?.minVariantPrice?.amount || '0.00';
    const currency = product?.priceRange?.minVariantPrice?.currencyCode || 'USD';
    const imageUrl = product?.images?.edges?.[0]?.node?.url || plantImg;
    const imageAlt = product?.images?.edges?.[0]?.node?.altText || title;

    // Create a handle from title for URL (simplified approach)
    const handle = product ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'default-plant';

    return (
        <Link href={`/shop/${handle}`}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <div>
                        30% off
                    </div>
                    {typeof imageUrl === 'string' ? (
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}
                        />
                    ) : (
                        <Image src={plantImg} alt='img' layout='fill' objectFit='cover' />
                    )}
                </div>
                <div className={styles.bottomContainer}>
                    <div>
                        <h4>{title}</h4>
                        <div>
                            <p style={{ textDecoration: 'line-through' }}>
                                {currency} {(parseFloat(price) * 1.3).toFixed(2)}
                            </p>
                            <p style={{ color: 'black' }}>
                                {currency} {price}
                            </p>
                        </div>
                    </div>
                    <div>
                        <span>{product?.tags?.[0] || 'Plant'}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PlantCard;