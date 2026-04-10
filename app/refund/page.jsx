import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const ReturnAndRefund = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Refund & Return Policy</h1>

        <p className="mb-4">
          At <strong>Venkatraogari Vantillu</strong>, we take great care in
          preparing and packaging every order. Due to the perishable nature of
          our products, we do not accept returns.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Eligible Cases for Refund or Replacement
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Incorrect item received</li>
          <li>Missing items in the order</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. How to Request</h2>
        <p className="mb-4">To request a refund or replacement:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Contact us within <strong>24 hours</strong> of delivery
          </li>
          <li>Share clear photos or videos as proof</li>
          <li>Provide your order details</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Non-Eligible Cases
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Change of mind after delivery</li>
          <li>Personal taste preferences</li>
          <li>Minor variations in appearance or texture</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Refund Process</h2>
        <p className="mb-4">
          Once approved, refunds will be processed to your original payment
          method within <strong>5–7 business days</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Our Commitment</h2>
        <p className="mb-4">
          We are committed to delivering high-quality homemade food. If
          something goes wrong, we will do our best to make it right.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Venkatraogari Vantillu
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnAndRefund;
