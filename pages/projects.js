import Head from "next/head";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Jain Brokers",
      category: "Commercial",
      description:
        "A modern commercial hub designed for efficiency and sustainability. Featuring advanced architecture, natural lighting, and optimized space planning for growing businesses.",
      location: "Nagpur, Maharashtra",
      image: "/projects/jain-brokers.jpg",
      features: ["Modern Architecture", "Sustainable Design", "Optimal Space Planning"]
    },
    {
      id: 2,
      title: "Eefa Hotel",
      category: "Hospitality",
      description:
        "An elegant hospitality project crafted with a blend of luxury and functionality. The design emphasizes guest comfort, high-end interiors, and modern amenities.",
      location: "Nagpur, Maharashtra",
      image: "/projects/eefa-hotel.jpg",
      features: ["Luxury Design", "Guest Comfort", "Modern Amenities"]
    },
    {
      id: 3,
      title: "Siddharth Group Corporate Office",
      category: "Corporate Infrastructure",
      description:
        "A sophisticated office space reflecting professionalism and innovation. This project demonstrates our commitment to detail, sustainability, and efficiency in design.",
      location: "Pune, Maharashtra",
      image: "/projects/siddharth-group.jpg",
      features: ["Professional Design", "Sustainable Features", "Efficient Layout"]
    },
    {
      id: 4,
      title: "Green Acres Residency",
      category: "Residential Complex",
      description:
        "A premium residential community built amidst nature. Designed with spacious layouts, landscaped gardens, and eco-friendly construction practices.",
      location: "Amravati, Maharashtra",
      image: "/projects/green-acres.jpg",
      features: ["Eco-friendly", "Landscaped Gardens", "Spacious Layouts"]
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
              Discover our landmark constructions that redefine excellence in residential, commercial, and hospitality sectors
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
                {/* Image */}
                <div className={`relative ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={500}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  {/* Accent Element */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-[#e67e22] rounded-2xl z-10 ${index % 2 !== 0 ? "lg:-left-6 lg:right-auto" : ""}`}></div>
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