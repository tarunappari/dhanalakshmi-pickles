"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const TestPageContent = () => {
  const searchParams = useSearchParams();
  const formData = Object.fromEntries(searchParams.entries());

  return (
    <div style={{ minHeight: '60vh', padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 'bold' }}>
        Checkout Details Received
      </h1>
      <p style={{ color: '#555', marginBottom: '16px' }}>
        The form was successfully validated and navigated to <strong>/test</strong> with the following data:
      </p>
      
      <div style={{ 
        background: '#1F2937', 
        color: '#E5E7EB',
        padding: '24px', 
        borderRadius: '12px', 
        overflowX: 'auto',
        fontFamily: 'monospace',
        fontSize: '1rem'
      }}>
        <pre>
          {Object.keys(formData).length === 0 
            ? 'No form data found in the URL.'
            : JSON.stringify(formData, null, 2)
          }
        </pre>
      </div>
    </div>
  );
};

export default function TestPage() {
  return (
    <div style={{ background: '#F8F9FA' }}>
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading form data...</div>}>
        <TestPageContent />
      </Suspense>
      <Footer />
    </div>
  );
}
