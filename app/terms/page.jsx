import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const TermsConditions = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to <strong>Venkatraogari Vantillu</strong>. By using our
          website and placing orders, you agree to the following terms and
          conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. General</h2>
        <p className="mb-4">
          All products are homemade and prepared after receiving your order.
          Slight variations in taste, color, or texture are natural and part of
          traditional cooking.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Orders</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Orders are confirmed only after successful payment.</li>
          <li>We reserve the right to cancel orders if necessary.</li>
          <li>Please ensure all details provided are accurate.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Pricing</h2>
        <p className="mb-4">
          All prices are listed in INR and are subject to change without prior
          notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Payments</h2>
        <p className="mb-4">
          Payments are processed securely through third-party providers like
          Razorpay. We do not store your payment details.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Delivery</h2>
        <p className="mb-4">
          Delivery timelines may vary depending on location and product
          preparation time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Liability</h2>
        <p className="mb-4">
          We are not responsible for delays caused by courier services or
          incorrect information provided by the customer.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes</h2>
        <p className="mb-4">
          We may update these terms from time to time. Continued use of the
          website means you accept the updated terms.
        </p>

        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Venkatraogari Vantillu
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
