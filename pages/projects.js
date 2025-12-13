import Head from "next/head";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sohamdhwani Smart Apartments",
      category: "Residential",
      description:
        "Premium 3BHK smart apartments featuring modern architecture, intelligent home systems, and luxurious amenities. Designed for contemporary living with a focus on comfort, technology, and sustainable design in a prime Nagpur location.",
      location: "Plot no 13, Sawarkar Nagar, Nagpur, Maharashtra",
      image: "/projects/Sohamdhwani.png",
      features: ["3BHK Luxury Apartments", "Smart Home Technology", "Modern Architecture", "Prime Location"]
    },
    {
      id: 2,
      title: "Tuljai Impreials",
      category: "Residential",
      description:
        "Elegant 3BHK residential complex offering sophisticated living spaces with premium finishes. The project combines functional design with aesthetic appeal, providing residents with a comfortable and upscale lifestyle in Wanjari Nagar.",
      location: "Plot No. 24, Wanjari Nagar, Nagpur, Maharashtra",
      image: "/projects/Tuljai.png",
      features: ["3BHK Premium Residences", "Sophisticated Design", "Premium Finishes", "Strategic Location"]
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | A & T Buildcon</title>
        <meta
          name="description"
          content="Explore our landmark construction projects across residential, commercial, and industrial sectors."
        />
      </Head>

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] sm:h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/About.jpg"
          alt="A & T Buildcon Projects"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 text-white px-6 mt-20">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-[#e67e22] mx-auto mb-4"></div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight text-[#ffffff]">Our Projects</h1>
            <div className="w-20 h-1 bg-[#e67e22] mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl font-light tracking-wide">
            Showcasing excellence in construction and design
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <main className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
              Portfolio
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-[#e67e22]">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our landmark constructions that redefine excellence in residential development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center group ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image Container - Clean and Full */}
                <div className={`relative ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                    <div className="relative w-full h-[400px] lg:h-[500px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Removed orange accent element */}
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="inline-block">
                    <span className="inline-block px-4 py-2 bg-[#e67e22] text-white text-sm font-semibold rounded-full mb-4">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#e67e22] rounded-full"></div>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-8 h-8 bg-[#e67e22] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <span className="text-gray-600 font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="w-20 h-1 bg-[#e67e22] mx-auto mb-4"></div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
            <div className="w-8 h-0.5 bg-[#e67e22]"></div>
            Get Started
            <div className="w-8 h-0.5 bg-[#e67e22]"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your <span className="text-[#e67e22]">Project</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise in construction and design excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}