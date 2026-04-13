import CategoryPageSection from '@/components/categories/CategoryPageSection'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'

export const metadata = {
  title: "Shop by Category - Pickles, Podis, Sweets & Snacks",
  description: "Browse our collections of Godavari foods and pickles. Authentic Konaseema non-veg pickles, veg pickles, traditional powders, sweets, and snacks delivered to your door.",
  alternates: {
    canonical: "/categories",
  },
};

const page = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <CategoryPageSection />
      <Footer />
    </div>
  )
}

export default page