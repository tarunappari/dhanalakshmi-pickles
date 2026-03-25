import React from 'react'
import Sidebar from './Sidebar';
import Plants from './Plants';
import styles from '@/styles/shop/Shop.module.scss'

const Shop = () => {
    return (
        <div className={styles.shopContainer}>
            <Sidebar />
            <Plants />
        </div>
    )
}

export default Shop;