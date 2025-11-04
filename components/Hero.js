import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[60vh] sm:h-[100vh] flex items-end pb-8 sm:pb-12 md:pb-16 text-center overflow-hidden -mt-[80px]" // 👈 this is the fix
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero.jpg"
          alt="A & T Buildcon - Construction Excellence"
          fill
          priority
          quality={95}
          className="object-cover"
        />
        {/* Subtle overlay (for readability but not dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>

      {/* Floating Accent Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#e67e22]/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400/10 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 animate-[fadeInDown_1s_ease-out]">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e67e22] rounded-full animate-[bounce_1s_infinite]" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e67e22] rounded-full animate-[bounce_1s_infinite_0.2s]" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e67e22] rounded-full animate-[bounce_1s_infinite_0.4s]" />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Trusted Since 2010
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block animate-[slideUp_0.8s_ease-out_0.2s_both] text-[#ffffff]">
            Building
          </span>
          <span className="block animate-[slideUp_0.8s_ease-out_0.4s_both] text-[#f5b042]">
            Dreams,
          </span>
          <span className="block animate-[slideUp_0.8s_ease-out_0.6s_both] text-[#ffffff]">
            Engineering <span className="text-[#f5b042]">Reality</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out_1s_both]">
          Your trusted partner for innovative construction solutions. Excellence,
          reliability, and unmatched quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-[fadeIn_1s_ease-out_1.2s_both]">
          <Link
            href="#projects"
            className="group relative bg-[#e67e22] hover:bg-[#cf711f] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-400/40 w-full sm:w-auto text-center"
          >
            Explore Projects
          </Link>

          <Link
            href="#contact"
            className="group border border-white/70 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-full backdrop-blur-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20 w-full sm:w-auto text-center"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
