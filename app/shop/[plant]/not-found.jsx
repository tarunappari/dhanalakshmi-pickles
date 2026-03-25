import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div style={{ 
        padding: '4rem 2rem', 
        textAlign: 'center', 
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Product Not Found
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
          Sorry, the product you're looking for doesn't exist or has been removed.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link 
            href="/shop"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}
          >
            Browse All Products
          </Link>
          <Link 
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
