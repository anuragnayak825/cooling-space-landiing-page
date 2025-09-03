import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Added

export default function ContactForm() {
  const [isShow, setIsShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ for redirect

  // ✅ phone formatting
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10); // max 10 digits
    const match = digits.match(/^(\d{3})(\d{3})(\d{0,4})$/);
    if (match) {
      return `${match[1]}-${match[2]} ${match[3]}`.trim();
    } else if (digits.length <= 6) {
      return digits.replace(/^(\d{3})(\d{0,3})$/, "$1-$2").trim();
    }
    return digits;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setPhone(formatted);
    setFormData({ ...formData, phone: formatted });
  };

  const handleClearInput = () => {
    setPhone("");
    setFormData({ ...formData, phone: "" });
  };

  // ✅ handle other inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  // ✅ submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.message.trim()
    ) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      data.append("message", formData.message);

      const res = await axios.post("/aircond-service/contact.php", data); // 👈 apna backend URL

      if (res.data.success) {
        // ✅ redirect after success
        navigate("/aircond-service/thank-you");
      } else {
        setError("❌ Error sending message. Try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("❌ Something went wrong. Try again!");
    }
    setLoading(false);
  };

  // ✅ outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:max-w-md mx-auto border border-gray-300 bg-white px-4 py-6 sm:px-6 md:px-8 rounded-md shadow-xl shadow-gray-500 space-y-6"
    >
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-800">
        Tell Us What You Need
      </h1>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Name */}
      <div className="relative w-full">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="peer h-14 w-full border-2 placeholder:text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Name"
        />
        <label
          htmlFor="name"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-base transition-all
             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
             peer-focus:-top-2 peer-focus:text-base peer-focus:text-blue-600"
        >
          Your Name
        </label>
      </div>

      {/* Phone */}
      <div
        className="w-full h-14 relative flex shadow-sm rounded-md"
        ref={dropdownRef}
      >
        <div className="w-16 h-14 border-2 placeholder:text-base border-gray-300 border-e-0 rounded-s-md flex justify-center items-center bg-gray-100 ">
          <img
            src="https://flagcdn.com/w40/my.png"
            alt="Malaysia Flag"
            className="w-6 h-4"
          />
          <IoMdArrowDropdown
            onClick={() => setIsShow(!isShow)}
            className={`cursor-pointer transition-transform ${
              isShow ? "rotate-180" : ""
            }`}
          />
        </div>

        <div className="w-full">
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            onClick={handleClearInput}
            placeholder="012-345 6789"
            className="h-14 w-full border-2 placeholder:text-base border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-e-md px-4"
          />
        </div>
      </div>

      {/* Address */}
      <div className="relative w-full">
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="peer h-14 w-full border-2 placeholder:text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4"
          placeholder="Your Address"
        />
        <label
          htmlFor="address"
          className="absolute left-4 -top-2 bg-white px-1 text-gray-600 text-base transition-all
             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
             peer-focus:-top-2 peer-focus:text-base peer-focus:text-blue-600"
        >
          Your Address
        </label>
      </div>

      {/* Message */}
      <div className="relative w-full">
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="peer w-full border-2 placeholder:text-base border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 rounded-md px-4 pt-8 resize-none"
          placeholder="Your Message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-4 top-1 bg-white px-1 text-gray-600 text-base transition-all
             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
             peer-focus:top-1 peer-focus:text-base peer-focus:text-blue-600"
        >
          Your Message
        </label>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
