"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const links = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👥" },
    { href: "/projects", label: "Projects", icon: "🏗️" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg text-dark"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-60">
            <Image
              src="/Logo1.png"
              alt="A & T Buildcon Logo"
              width={80}
              height={80}
              className="transition-transform duration-500 hover:scale-110"
            />
            <span
              className={`text-xl font-bold tracking-wide ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium text-base">
            {links.map(({ href, label }) => {
              const active = router.pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition-all duration-300 hover:text-[#e67e22] px-2 py-1 ${
                    scrolled 
                      ? active ? "text-[#e67e22]" : "text-gray-700" 
                      : active ? "text-[#e67e22]" : "text-white"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#e67e22] rounded-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle - Animated Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden relative w-8 h-8 flex flex-col items-center justify-center transition-all duration-300 z-60 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-0"
                  : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 translate-y-0"
                  : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-black/0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] z-50 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="A & T Buildcon Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-white font-bold text-lg">A & T Buildcon</h2>
              <p className="text-gray-400 text-sm">Building Excellence</p>
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <div className="p-6 space-y-4">
          {links.map(({ href, label, icon }, index) => {
            const active = router.pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/10 group ${
                  active
                    ? "bg-[#e67e22]/20 text-[#e67e22] border-l-4 border-[#e67e22]"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{
                  animationDelay: menuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                  {icon}
                </span>
                <span className="font-semibold text-lg transition-all duration-300">
                  {label}
                </span>
                {active && (
                  <span className="ml-auto w-2 h-2 bg-[#e67e22] rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">Ready to build your dream?</p>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full text-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideInLeft 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}