import React, { useState, useEffect } from "react";

const BulkOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const WEBSITE_SOURCE = "Attar";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = {
      full_name: formData.fullName,
      mobile_no: formData.phone,
      product_name: formData.product,
      quantity: formData.quantity,
      enquiry_message: formData.message,
      source: WEBSITE_SOURCE,
    };

    try {
      const response = await fetch(
        "http://10.27.1.106/perfume_backend/submit_bulk_orders.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const products = [
    "Kesar Chandan",
    "Mogra",
    "WOODY OUDH",
    "Red Rose",
    "Sukhad Chandan",
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
      <div className="w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-[#f1f3f6] font-[Poppins] transition-all">
        <h2 className="text-center mb-6 text-[#5B3A29] text-2xl sm:text-3xl font-bold">
          📦 Bulk Order
        </h2>

        {submitted && (
          <p className="text-center text-green-600 font-medium mb-4">
            ✅ Your order has been submitted!
          </p>
        )}

        {error && (
          <p className="text-center text-red-600 font-medium mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c6226] bg-white text-gray-800"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c6226] bg-white text-gray-800"
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c6226] bg-white text-gray-800"
          >
            <option value="">Select Fragrance</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c6226] bg-white text-gray-800"
          />

          <textarea
            name="message"
            placeholder="Message / Requirements (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8c6226] bg-white text-gray-800 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Bulk Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkOrder;
