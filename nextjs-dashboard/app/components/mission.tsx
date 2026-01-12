"use client";

export default function Mission() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold mb-4">
                        Who We Are
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Vision & Mission
                    </h2>
                    <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            A <span className="text-gray-900 font-semibold">healthy, educated, empowered</span>, and economically resilient community where every individual has the opportunity to <span className="text-gray-900 font-semibold">grow, thrive, and achieve their full potential</span>.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To <span className="text-gray-900 font-semibold">improve lives</span> by expanding access to quality education, promoting health and nutrition, enhancing economic empowerment, and strengthening community participation using <span className="text-gray-900 font-semibold">evidence-based, inclusive, and sustainable approaches</span>.
                        </p>
                    </div>
                </div>

                {/* Location Badge */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600">Based in <strong className="text-gray-900">Nanjiri, Lilongwe, Malawi</strong></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
