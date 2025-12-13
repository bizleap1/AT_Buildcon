import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | A & T Buildcon</title>
        <meta
          name="description"
          content="Learn more about A & T Buildcon — delivering sustainable, innovative, and high-quality construction solutions."
        />
      </Head>

      {/* Hero Section */}
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
                    About Us
                  </h1>
                  <div className="w-20 h-1 bg-[#e67e22] mx-auto"></div>
                </div>
                <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl font-light tracking-wide">
                  Crafting excellence in construction
                </p>
              </div>
            </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/Hero.jpg"
            alt="A & T Buildcon Site"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Building Dreams, <span className="text-[#e67e22]">Creating Legacy</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>A & T Buildcon</strong> is built on the foundation of integrity,
              innovation, and superior craftsmanship. We focus on creating spaces
              that reflect quality, durability, and trust.
            </p>
            <p className="text-lg text-gray-700">
              Our expertise spans residential, commercial, and infrastructure
              projects, delivering value-driven construction that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-[#e67e22]">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To redefine modern living by creating sustainable, innovative, and
              high-quality spaces that inspire growth, comfort, and trust for
              generations to come.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-[#e67e22]">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>A & T Buildcon</strong>, our mission is to deliver high-quality,
              timely, and sustainable construction solutions with integrity. We are
              committed to customer satisfaction, innovative design, and creating
              long-term value for our clients and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-[#e67e22]">A & T Buildcon</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Strict quality control to ensure durable and reliable construction.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                Projects delivered on time without compromising excellence.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Transparent Process</h3>
              <p className="text-gray-600">
                Honest communication and complete transparency at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            Meet Our <span className="text-[#e67e22]">Founders</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <Image
                src="/founder1.jpg"
                alt="Ashish Uttarwar"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-6 shadow-xl"
              />
              <h3 className="text-2xl font-bold">Ashish Uttarwar</h3>
              <p className="text-[#e67e22] font-semibold">Co-Founder</p>
            </div>

            <div>
              <Image
                src="/founder2.jpg"
                alt="Tushar Umbarkar"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-6 shadow-xl"
              />
              <h3 className="text-2xl font-bold">Tushar Umbarkar</h3>
              <p className="text-[#e67e22] font-semibold">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
