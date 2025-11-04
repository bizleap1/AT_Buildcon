import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | A & T Buildcon</title>
        <meta
          name="description"
          content="Learn more about A & T Buildcon — trusted engineers and builders delivering quality, innovation, and excellence."
        />
      </Head>

      {/* Hero Banner Section - No Filter */}
      <section className="relative w-full h-[50vh] sm:h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/About.jpg"
          alt="About A & T Buildcon"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <div className="relative z-10 text-white px-6 mt-20">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-[#e67e22] mx-auto mb-4"></div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight text-[#ffffff]">About Us</h1>
            <div className="w-20 h-1 bg-[#e67e22] mx-auto"></div>
          </div>
          <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl font-light tracking-wide">
            Crafting excellence in construction
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Hero.jpg"
                  alt="A & T Buildcon construction site"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e67e22] rounded-2xl z-10"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/20 rounded-xl"></div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-[#e67e22]"></div>
                Our Story
                <div className="w-8 h-0.5 bg-[#e67e22]"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Building Dreams, <span className="text-[#e67e22]">Creating Legacy</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">A & T Buildcon</strong> stands as a beacon of excellence 
                in the construction industry, founded on the principles of integrity, innovation, and 
                impeccable craftsmanship.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                For over a decade, we have transformed skylines and communities through our commitment 
                to delivering exceptional residential, commercial, and industrial projects that stand 
                the test of time.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#e67e22] mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#e67e22] mb-2">200+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
              Our Values
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#e67e22]">A & T Buildcon</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#e67e22] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project undergoes rigorous quality checks to ensure the highest standards of construction and materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#e67e22] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We respect deadlines and ensure projects are completed on schedule without compromising quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#e67e22] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💎
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear communication and honest pricing - no hidden costs, no surprises throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e67e22] uppercase tracking-wider mb-4">
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
              Leadership
              <div className="w-8 h-0.5 bg-[#e67e22]"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[#e67e22]">Visionaries</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Founder 1 */}
            <div className="group text-center">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e67e22] to-yellow-500 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/founder1.jpg"
                    alt="Mr. Aditya Sharma - Co-Founder"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Aditya Sharma</h3>
              <p className="text-[#e67e22] font-semibold mb-4">Co-Founder & Chief Engineer</p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                With 15+ years in civil engineering, Aditya leads our technical excellence, 
                ensuring every project meets the highest standards of quality and innovation.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="group text-center">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e67e22] to-yellow-500 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/founder2.jpg"
                    alt="Mr. Tanishq Verma - Co-Founder"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Tanishq Verma</h3>
              <p className="text-[#e67e22] font-semibold mb-4">Co-Founder & Managing Director</p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                A visionary leader with expertise in project management, Tanishq drives our 
                strategic growth and ensures exceptional client experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </>
  );
}