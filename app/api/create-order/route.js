import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/supabase';

// Function to create Razorpay instance only when needed
function createRazorpayInstance() {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error('Razorpay environment variables are not configured');
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export async function POST(request) {
  try {
    const { amount, currency = 'INR', receipt, customer_details, items } = await request.json();

    // Validate required fields
    if (!amount || !receipt || !customer_details || !items) {
      return NextResponse.json(
        { error: 'Missing required order details' },
        { status: 400 }
      );
    }

    // Create order options
    const amountInPaise = Math.round(amount * 100); // Convert to paise (smallest currency unit)

    // Log for debugging
    console.log('Original amount:', amount);
    console.log('Amount in paise:', amountInPaise);

    // Razorpay maximum amount is 50,00,000 paise (₹50,000)
    if (amountInPaise > 5000000) {
      return NextResponse.json(
        { error: `Amount ₹${amount} exceeds maximum limit of ₹50,000` },
        { status: 400 }
      );
    }

    const options = {
      amount: amountInPaise,
      currency,
      receipt,
      notes: { email: customer_details.email, phone: customer_details.phone },
    };

    // Create Razorpay instance and order
    const razorpay = createRazorpayInstance();
    const order = await razorpay.orders.create(options);

    // Save order before payment status=pending
    const { data: orderData, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          razorpay_order_id: order.id,
          customer_name: customer_details.fullName,
          email: customer_details.email,
          phone: customer_details.phone,
          address: customer_details.street,
          city: customer_details.city,
          pincode: customer_details.pinCode,
          total_amount: amount,
          payment_status: "pending",
          order_status: "placed"
        },
      ])
      .select();

    if (orderError) {
      console.error("Supabase Order Error:", orderError);
      throw new Error("Failed to save order details");
    }

    const savedOrder = orderData[0];

    // Save order items
    const orderItems = items.map((item) => ({
      order_id: savedOrder.id,
      product_id: item.id.toString(),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemsError) {
      console.error("Supabase Order Items Error:", itemsError);
      throw new Error("Failed to save order items");
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
        created_at: order.created_at,
      },
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);

    // Handle configuration errors
    if (error.message.includes('environment variables')) {
      return NextResponse.json(
        {
          error: 'Payment service configuration error',
          details: 'Service temporarily unavailable'
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to create order',
        details: error.message
      },
      { status: 500 }
    );
  }
}