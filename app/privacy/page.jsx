import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to <strong>Venkatraogari Vantillu</strong>. Your privacy is
          very important to us. This Privacy Policy explains how we collect,
          use, and protect your information when you visit our website or place
          an order.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          When you place an order or interact with our website, we may collect
          the following information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Delivery address</li>
          <li>Pincode and location details</li>
        </ul>

        {/* How We Use */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use your information only for:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Processing and delivering your orders</li>
          <li>Contacting you regarding your order</li>
          <li>Providing customer support</li>
          <li>Improving our services</li>
        </ul>

        {/* Payments */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Payments & Security
        </h2>
        <p className="mb-4">
          All payments are processed securely through trusted third-party
          payment gateways like Razorpay. We do not store your card or payment
          details on our servers.
        </p>

        {/* Data Protection */}
        <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Protection</h2>
        <p className="mb-4">
          We take appropriate measures to protect your personal information.
          However, no method of transmission over the internet is 100% secure.
        </p>

        {/* Sharing */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties
          except when necessary for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Order delivery (courier services)</li>
          <li>Payment processing</li>
        </ul>

        {/* User Rights */}
        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to request access, correction, or deletion of your
          personal data by contacting us.
        </p>

        {/* Updates */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, you can contact
          us at:
        </p>

        <p className="mb-2">📞 Phone: Your Phone Number</p>
        <p className="mb-2">📧 Email: Your Email Address</p>

        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Venkatraogari Vantillu. All rights
          reserved.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
