"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/About.jpg"
              alt="About A & T Buildcon"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-[#e67e22]">A & T Buildcon</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At A & T Buildcon, we believe in constructing not just buildings,
              but relationships built on trust, quality, and reliability.
              With over a decade of excellence, our company has delivered
              residential, commercial, and industrial projects that redefine modern construction standards.
            </p>
            <Link
              href="/about"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#e67e22]">Services</span>
          </h2>
          <p className="text-gray-600 mb-12">
            From design to delivery — A & T Buildcon covers every aspect of your project.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Residential Construction", desc: "Luxury homes and modern apartments built with care." },
              { title: "Commercial Projects", desc: "Efficient office spaces and retail complexes." },
              { title: "Industrial Construction", desc: "Reliable, large-scale industrial facilities." },
              { title: "Renovations", desc: "Transforming existing spaces into modern masterpieces." },
              { title: "Project Management", desc: "Timely, efficient execution from concept to completion." },
              { title: "Consulting & Planning", desc: "Expert guidance for every phase of your project." },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-[#e67e22]">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-block bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ================= PROJECTS PREVIEW ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#e67e22]">Projects</span>
          </h2>
          <p className="text-gray-600 mb-12">
            A glimpse of our most successful and innovative construction projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {["p1.jpg", "p2.jpg", "p3.jpg"].map((img, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={`/${img}`}
                  alt={`Project ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  Project {index + 1}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-12 inline-block bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why <span className="text-[#e67e22]">Choose Us?</span>
          </h2>
          <p className="text-gray-600 mb-12">
            Experience, integrity, and innovation — the foundation of everything we build.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              "15+ Years of Experience",
              "200+ Successful Projects",
              "Skilled Professional Team",
              "Quality & Safety Assured",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="font-bold text-[#e67e22] text-lg mb-2">
                  {point}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[#e67e22] text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-[#ffffff]">
          Ready to Start Your Dream Project?
        </h2>
        <p className="text-lg mb-10">
          Let’s collaborate to bring your vision to life with precision and quality.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#e67e22] font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
