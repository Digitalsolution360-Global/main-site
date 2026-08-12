'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconCheck, IconX, IconPhone, IconMail, IconUser, IconSend } from '@tabler/icons-react';

function ContactForm1() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const pageUrl = window.location.href;

      // Save to database
      const dbResponse = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country_code: '+91',
          source: 'aside_form',
          page_url: pageUrl,
        }),
      });

      if (!dbResponse.ok) throw new Error('DB save failed');

      // Send email via FormSubmit
      const submitData = new FormData();
      submitData.append('Name', formData.name);
      submitData.append('Email', formData.email);
      submitData.append('Phone', formData.phone);
      submitData.append('Source', 'Aside Form');
      submitData.append('Page URL', pageUrl);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        body: submitData,
      });

      resetForm();
      setShowThankYou(true);
    } catch (error) {
      console.error('Form error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 transition-all hover:shadow-2xl">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Get a Free Consultation</h3>
          <p className="text-gray-600 text-sm mt-1">
            Fill in your details and we'll get back within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconUser size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-100 text-gray-900 text-sm"
                placeholder="Your Full Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconMail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-100 text-gray-900 text-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconPhone size={18} className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition disabled:bg-gray-100 text-gray-900 text-sm"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <IconSend size={18} />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>

      {/* Modal Thank You */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
            >
              <button
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <IconX size={20} />
              </button>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconCheck size={40} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-lg text-gray-600 mb-6">
                We've received your details. Our team will reach out within 24 hours.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Need immediate help?</p>
                <a href="mailto:info@digitalsolution360.com" className="text-blue-600 font-semibold hover:underline">
                  info@digitalsolution360.com
                </a>
              </div>
              <p className="text-sm text-gray-500">This message will auto-close in 5 seconds</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactForm1;