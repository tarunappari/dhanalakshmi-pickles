"use client"
import Footer from '@/components/common/Footer';
import ProductsCollection from '@/components/common/main/ProductsCollection';
import Navbar from '@/components/common/Navbar';
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <ProductsCollection title={'Giftings'} />
      <Footer />
    </div>
  )
}

export default page;
