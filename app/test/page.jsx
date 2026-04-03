import React from 'react';
import { supabase } from '@/lib/supabase/supabase';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

// Ensure this page always fetches fresh data and is dynamically rendered
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestPage() {
  const { data: orders, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '50px', textAlign: 'center', color: 'red', minHeight: '60vh' }}>
          <h2>Error fetching orders</h2>
          <p>{error.message}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', minHeight: '70vh' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px', color: '#1a1a1a' }}>Supabase Orders Database Data</h1>
        
        {(!orders || orders.length === 0) ? (
          <p style={{ color: '#6b7280' }}>No orders found in the database yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {orders.map((order) => (
              <div key={order.id} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '16px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#111827' }}>Order ID: {order.id}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '4px' }}>{new Date(order.created_at).toLocaleString()}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      backgroundColor: order.payment_status === 'paid' ? '#dcfce7' : order.payment_status === 'failed' ? '#fee2e2' : '#fef3c7',
                      color: order.payment_status === 'paid' ? '#166534' : order.payment_status === 'failed' ? '#991b1b' : '#92400e'
                    }}>
                      {order.payment_status}
                    </span>
                    <p style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '1.5rem', color: '#111827' }}>₹{order.total_amount?.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                  <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Info</h4>
                    <p style={{ color: '#111827', fontWeight: '500' }}>{order.customer_name}</p>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '4px' }}>{order.email}</p>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '2px' }}>{order.phone}</p>
                  </div>
                  
                  <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivery Address</h4>
                    <p style={{ fontSize: '0.875rem', color: '#111827' }}>{order.address}</p>
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '4px' }}>{order.city} - {order.pincode}</p>
                  </div>
                  
                  <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: '600', color: '#374151', marginBottom: '8px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Payment Details</h4>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280', wordBreak: 'break-all', marginBottom: '4px' }}><span style={{ fontWeight: '600', color: '#374151' }}>Razorpay Order:</span> {order.razorpay_order_id}</p>
                    <p style={{ fontSize: '0.75rem', color: '#6b7280', wordBreak: 'break-all' }}><span style={{ fontWeight: '600', color: '#374151' }}>RP Payment ID:</span> {order.razorpay_payment_id || 'Pending/None'}</p>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '12px' }}>Order Items ({order.order_items?.length || 0})</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {order.order_items?.map(item => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', padding: '12px 16px', borderRadius: '6px', border: '1px solid #f3f4f6' }}>
                        <div>
                          <span style={{ fontWeight: '500', color: '#111827' }}>{item.name}</span>
                          <span style={{ color: '#4b5563', fontSize: '0.875rem', marginLeft: '12px', padding: '2px 8px', backgroundColor: '#e5e7eb', borderRadius: '999px' }}>Qty: {item.quantity}</span>
                        </div>
                        <span style={{ fontWeight: '600', color: '#111827' }}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}