"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: "📞", text: "+91 88888 88888" },
    { icon: "📧", text: "info@atbuildcon.com" },
    { icon: "🏢", text: "Nagpur, Maharashtra" },
  ];

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e67e22] rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#e67e22] transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e67e22] rounded-full"></div>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="text-lg">{contact.icon}</span>
                  <span className="text-gray-300">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
              About Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#e67e22] rounded-full"></div>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A & T Buildcon — Engineers & Builders delivering excellence in construction and infrastructure projects across Maharashtra.
            </p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700/50 mt-8"></div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm py-6">
        © {currentYear} A & T Buildcon. All rights reserved.
      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-[#e67e22] hover:bg-[#cf711f] rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Floating WhatsApp Button with Proper Logo */}
      <a
        href="https://wa.me/918888888888"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp SVG Logo */}
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="white"
          className="group-hover:scale-110 transition-transform duration-300"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444"/>
        </svg>
        
        {/* Hover Tooltip */}
        <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </a>
    </footer>
  );
}