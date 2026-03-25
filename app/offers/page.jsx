"use client"
import Footer from '@/components/common/Footer';
import OffersCollection from '@/components/common/main/OffersCollection';
import Navbar from '@/components/common/Navbar';
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <OffersCollection title={'Offers'} />
      <Footer />
    </div>
  )
}

export default page;
