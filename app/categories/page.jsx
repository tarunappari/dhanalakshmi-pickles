import CategoryPageSection from '@/components/categories/CategoryPageSection'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <CategoryPageSection />
      <Footer />
    </div>
  )
}

export default page