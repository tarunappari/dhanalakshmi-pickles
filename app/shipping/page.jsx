import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>

        <p className="mb-4">
          At <strong>Venkatraogari Vantillu</strong>, every product is freshly
          prepared after receiving your order to ensure authentic taste and
          quality.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Order Processing Time
        </h2>
        <p className="mb-4">
          Orders are usually prepared within <strong>1–3 days</strong> depending
          on the product and quantity.
        </p>
        <p className="mb-4">
          Incase of Fryums(vadiyalu) orders are usually prepared within <strong>5–15 days</strong> depending
          on the product and quantity.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Delivery Time</h2>
        <p className="mb-4">
          Once shipped, delivery typically takes{" "}
          <strong>3–7 business days</strong> depending on your location.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Shipping Charges</h2>
        <p className="mb-4">
          Shipping charges are free within in the India
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Order Tracking</h2>
        <p className="mb-4">
          You will receive tracking details via SMS or email once your order is
          shipped.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Important Notes</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Please ensure your address and phone number are correct.</li>
          <li>Delays may occur due to courier services or external factors.</li>
          <li>
            Since our products are homemade and prepared fresh, slight delays
            may occur to maintain quality.
          </li>
        </ul>

        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Venkatraogari Vantillu
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
