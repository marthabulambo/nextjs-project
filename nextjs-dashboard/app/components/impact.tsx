"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
    {
        number: 15,
        suffix: "+",
        label: "Communities Served",
        description: "Across Lilongwe and beyond",
    },
    {
        number: 5000,
        suffix: "+",
        label: "Lives Impacted",
        description: "Children, youth, and families",
    },
    {
        number: 3,
        suffix: "",
        label: "Core Programs",
        description: "Education, Health, Empowerment",
    },
    {
        number: 100,
        suffix: "%",
        label: "Community-Led",
        description: "Local ownership of development",
    },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
            {count.toLocaleString()}
            {suffix}
        </div>
    );
}

export default function Impact() {
    return (
        <section className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
                        Making a Difference
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Every statistic represents real lives changed, communities strengthened, and futures brightened.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/5 rounded-2xl p-8 text-center border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                            <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-16 text-center">
                    <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
                        "A healthy, educated, empowered, and economically resilient community where every individual has the opportunity to grow, thrive, and achieve their full potential."
                    </blockquote>
                    <p className="text-white font-semibold mt-4">— Kind Root Vision</p>
                </div>
            </div>
        </section>
    );
}
