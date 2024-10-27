"use client"
import React, { useState } from 'react';
import { Building2, Mail, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Visit Us",
      content: "Shop No:- 213, 6th Cross APMC Yard Bandaypalya, Mysuru - 570 025"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      content: "hr@citly.in"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      content: "+91-9652737394"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="pt-28 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Have questions about our services? We're here to help and answer any questions you might have.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-100 rounded-full text-green-700 transform transition-transform duration-300 hover:scale-110">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-lg text-green-800">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-green-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.4603223221196!2d72.827660!3d19.136326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c4abfef9f9%3A0x4b4547d40eb0b0cf!2sStyroplast%20Trading%20Pvt%20Ltd%2C%20Remi%20Commercio%2C%20Office%20no%2C%20907%2C%20Off%20Link%20Rd%2C%20next%20to%20Yash%20Raj%20Studios%2C%20Andheri%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1666682828623!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}