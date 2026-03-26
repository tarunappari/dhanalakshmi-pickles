import React from 'react'
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Plant from '@/components/shop/plant/Plant';
import { getStaticProductByHandle } from '@/data/products';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
  const { plant: handle } = params;

  try {
    const product = getStaticProductByHandle(handle);

    return (
      <div>
        <Navbar />
        <Plant handle={handle} product={product} />
        <Footer />
      </div>
    );

  } catch (error) {

    console.error('Error fetching product:', error);
    return (
      <div>
        <Navbar />
        <Plant handle={handle} />
        <Footer />
      </div>
    );
    

  }
}

export default page;