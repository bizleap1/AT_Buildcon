"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919822706480"; // 🟢 Replace with your WhatsApp number
    const { name, phone, email, projectType, message } = formData;

    const text = `Hello A & T Buildcon! 👷‍♂️
I would like to get in touch.

Name: ${name}
Phone: ${phone}
Email: ${email}
Project Type: ${projectType}
Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      details: "+91 98227 06480",
      description: "Mon-Sun, 8AM-8PM",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@atbuildcon.com",
      description: "We reply within 24 hours",
    },
    {
      icon: <FaBuilding />,
      title: "Office",
      details: "Nagpur, Maharashtra",
      description: "Visit our headquarters",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: "Monday - Saturday",
      description: "9:00 AM - 7:00 PM",
    },
  ];

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Renovation",
    "Industrial Project",
    "Consultation",
    "Other",
  ];

  return (
    <>
      <Head>
        <title>Contact Us | A & T Buildcon</title>
        <meta
          name="description"
          content="Get in touch with A & T Buildcon for construction and engineering inquiries."
        />
      </Head>

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] -mt-[80px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/About.jpg"
          alt="Contact A & T Buildcon"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-white px-6 mt-20">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-[#e67e22] mx-auto mb-4"></div>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-[#e67e22] mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl font-light tracking-wide">
            Let&apos;s build your vision together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
              Get In Touch
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Start Your <span className="text-[#e67e22]">Project</span> Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to bring your construction dreams to life? Contact us for a
              free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Get in touch with our team of construction experts. We&apos;re
                  here to answer your questions and help you start your next
                  project.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#e67e22] rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 font-semibold mb-1">
                      {item.details}
                    </p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-[#e67e22] to-orange-500 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">
                  Why Choose A & T Buildcon?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>15+ Years of Experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>200+ Projects Completed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Free Consultation & Quote</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Quality Guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                    />
                  </div>
                </div>

                {/* Email & Project Type */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, budget, and details..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-3"
                >
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We typically respond within 1–2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
