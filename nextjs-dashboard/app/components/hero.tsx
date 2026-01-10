import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/Missionary trip Tanzania, Africa 2020.jpg"
        alt="Community in Malawi"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Building Stronger Communities in Malawi
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Empowering lives through education, health, and economic development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition"
            >
              Get Involved →
            </Link>

            <Link
              href="/about"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

