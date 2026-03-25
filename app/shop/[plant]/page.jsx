import React from 'react'
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Plant from '@/components/shop/plant/Plant';
import { getStaticProductHandles, getStaticProductByHandle } from '@/data/products';
import { notFound } from 'next/navigation';

// Generate static paths for all products
export async function generateStaticParams() {
  try {
    const handles = getStaticProductHandles();

    return handles.map((handle) => ({
      plant: handle,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; // Return empty array if error, will fallback to dynamic generation
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { plant: handle } = params;

  try {
    const product = getStaticProductByHandle(handle);

    if (!product) {
      return {
        title: 'Product Not Found - Plant Store',
        description: 'The product you are looking for could not be found.',
      };
    }

    return {
      title: `${product.title} - Plant Store`,
      description: product.description || `View details for ${product.title} in our plant collection.`,
      openGraph: {
        title: product.title,
        description: product.description,
        images: product.images?.edges?.[0]?.node?.url ? [
          {
            url: product.images.edges[0].node.url,
            alt: product.images.edges[0].node.altText || product.title,
          }
        ] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: `${handle.replace(/-/g, ' ')} - Plant Store`,
      description: `View details for ${handle.replace(/-/g, ' ')} in our plant collection.`,
    };
  }
}

const page = async ({ params }) => {
  const { plant: handle } = params;

  try {
    const product = getStaticProductByHandle(handle);

    if (!product) {
      notFound(); // This will show the 404 page
    }

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