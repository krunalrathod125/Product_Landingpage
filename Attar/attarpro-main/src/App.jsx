import React from "react";
import WhatsAppButton from "./components/whatsapp";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/nav";
import ReturnPolicy from "./pages/Return_policy";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsAndConditions from "./pages/Terms&Condition";
import ShippingPolicy from "./pages/Shiping_policy";
import BulkOrder from "./pages/BulkOrder";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetail";
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <>
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/bulk-order" element={<BulkOrder />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* Policy Routes */}
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        {/* Backward Compatibility & Common Alias Redirects */}
        <Route path="/bulkorder" element={<Navigate to="/bulk-order" replace />} />
        <Route path="/shiping-policy" element={<Navigate to="/shipping-policy" replace />} />
        <Route path="/terms-condition" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/terms-conditions" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/blogs" element={<Navigate to="/blog" replace />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Fallback / 404 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
      </>
    </>
  );
}
