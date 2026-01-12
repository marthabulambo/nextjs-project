"use client";

import Link from "next/link";

const programs = [
    {
        title: "Education",
        subtitle: "Building Foundations for the Future",
        description:
            "Increasing access to quality education, improving literacy and numeracy outcomes, supporting schools with resources, and promoting lifelong learning.",
        highlights: [
            "School meal programs",
            "Teacher training & resources",
            "Infrastructure development",
            "Vocational skills training",
            "Early Childhood Development centres",
        ],
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        ),
    },
    {
        title: "Health & Nutrition",
        subtitle: "Promoting Wellbeing for All",
        description:
            "Improving health outcomes through SRHR awareness, HIV support, maternal health services, and comprehensive nutrition programs.",
        highlights: [
            "Sexual & Reproductive Health Rights",
            "HIV prevention & support",
            "Maternal & child health",
            "Nutrition education & supplementation",
            "Community health workers training",
        ],
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: "Community Empowerment",
        subtitle: "Strengthening Economic Resilience",
        description:
            "Empowering communities through economic opportunities, micro-loans, entrepreneurship support, and leadership development.",
        highlights: [
            "Micro-loan programs",
            "Financial literacy training",
            "Entrepreneurship support",
            "Women & youth leadership",
            "Community governance",
        ],
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

export default function Programs() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold mb-4">
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Programs
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Three interconnected pillars working together to create lasting change in communities across Malawi.
                    </p>
                    <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Programs Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-gray-900 p-6 text-white">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        {program.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{program.title}</h3>
                                        <p className="text-white/80 text-sm">{program.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>

                                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                                    Key Focus Areas
                                </h4>
                                <ul className="space-y-2 mb-6">
                                    {program.highlights.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/programs"
                                    className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cross-Cutting Issues Banner */}
                <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Cross-Cutting Priorities</h3>
                        <p className="text-gray-300 mb-6">
                            We address child marriages, teen pregnancy, and school dropout as interconnected challenges integrated across all our programs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Child Protection</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Teen Pregnancy Prevention</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">School Re-entry Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
