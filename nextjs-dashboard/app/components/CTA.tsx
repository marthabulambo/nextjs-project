import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-green-800 text-white text-center py-20 px-6">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center">
          <span className="text-2xl">👥</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Join Us in Making a Difference
      </h2>

      {/* Text */}
      <p className="max-w-2xl mx-auto text-green-100 mb-8">
        Your support can transform lives and build stronger communities.
        Together, we can create lasting change.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Link
          href="/get-involved"
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition"
        >
          Volunteer With Us
        </Link>

        <Link
          href="/contact"
          className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-800 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
