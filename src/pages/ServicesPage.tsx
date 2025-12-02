import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
    const SERVICES = [
        {
            title: "Custom Production",
            price: "From $500",
            unit: "per project",
            features: ["Genre-Agnostic Creation", "Full Arrangement", "Live Instrumentation", "Vocal Production", "Exclusive Rights"],
            description: "We build a sonic world around your voice. Whether it's a Bollywood ballad, a Trap banger, or an Afro-fusion hit, we craft the instrumental from scratch to fit your unique style."
        },
        {
            title: "Mixing & Mastering",
            price: "$250",
            unit: "per track",
            features: ["Stem Balancing", "Vocal Tuning & Timing", "Analog Saturation", "Loudness Optimization", "Radio & Streaming Ready"],
            description: "The science of sound. We take your raw recordings and transform them into a cohesive, professional master that competes with the top charts globally."
        },
        {
            title: "Vocal Production",
            price: "$150",
            unit: "per session",
            features: ["Recording Guidance", "Harmony Arrangement", "Ad-lib Direction", "Comping & Editing", "Pitch Correction"],
            description: "Your voice is the star. We coach you through the performance to capture the perfect take, then polish it to shine."
        }
    ];

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <section className="mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8"
                >
                    SERVICES
                </motion.h1>
                <p className="text-[#888] max-w-2xl text-lg leading-relaxed">
                    We offer a comprehensive suite of audio services designed for the modern artist. Our approach is detailed, scientific, and tailored to your specific needs.
                </p>
            </section>

            {/* Pricing Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {SERVICES.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-[#222] bg-[#0A0A0A] p-8 hover:border-[#444] transition-colors flex flex-col group"
                    >
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-3xl font-mono text-white">{service.price}</span>
                            <span className="text-[#666] text-xs uppercase tracking-wide">{service.unit}</span>
                        </div>
                        <p className="text-[#888] text-sm leading-relaxed mb-8 border-b border-[#222] pb-8">
                            {service.description}
                        </p>
                        <ul className="space-y-4 mb-12 flex-grow">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-[#ccc] text-sm">
                                    <div className="w-1 h-1 bg-white rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Start Project
                        </button>
                    </motion.div>
                ))}
            </section>

            {/* Detailed Approach */}
            <section>
                <div className="mb-12 border-b border-[#222] pb-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Our Detailed Approach</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-4">The Science of Sound</h4>
                        <p className="text-[#888] text-sm leading-relaxed mb-6">
                            We don't guess; we engineer. Every kick drum is tuned to the key of the song. Every vocal is EQ'd to sit perfectly in the pocket. We use spectrum analysis and reference tracks to ensure your song has the right tonal balance for its genre.
                        </p>
                        <p className="text-[#888] text-sm leading-relaxed">
                            Our hybrid setup combines the warmth of analog gear with the precision of digital plugins, giving you the best of both worlds.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-4">Genre Fluidity</h4>
                        <p className="text-[#888] text-sm leading-relaxed mb-6">
                            Coming from India, we are exposed to a rich tapestry of sounds. We are comfortable producing:
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                            {["Pop / R&B", "Hip-Hop / Trap", "Bollywood / Fusion", "Afrobeat / Dancehall", "EDM / House", "Cinematic Scores"].map(genre => (
                                <li key={genre} className="text-white text-xs uppercase tracking-wide border border-[#333] px-3 py-2 text-center">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
