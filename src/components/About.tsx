'use client';

import Image from 'next/image';
import { Code2, Briefcase, Users, Sparkles } from 'lucide-react';
import profileImage from '@/assets/MyPicture.jpg';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-20"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.3))',
                        top: '10%',
                        right: '-10%',
                    }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
                            color: 'var(--accent-primary)',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                        }}
                    >
                        <Sparkles size={16} />
                        About Me
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Who <span className="gradient-text">I Am</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Get to know the person behind the code
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image with enhanced styling */}
                    <div className="flex justify-center items-center w-full">
                        <div className="relative group">
                            {/* Glow effect behind image */}
                            <div
                                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.3))'
                                }}
                            />
                            {/* Image container */}
                            <div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    border: '2px solid rgba(139, 92, 246, 0.3)',
                                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.2)'
                                }}
                            >
                                <Image
                                    src={profileImage}
                                    alt="Aniket Dhiman"
                                    width={500}
                                    height={500}
                                    className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                                {/* Overlay gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2))'
                                    }}
                                />
                            </div>
                            {/* Decorative corner elements */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-primary)] rounded-tl-lg" />
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-pink)] rounded-br-lg" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h3
                            className="text-2xl md:text-3xl font-bold leading-tight"
                            style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
                        >
                            Passionate about creating{' '}
                            <span className="gradient-text">impactful</span> digital experiences
                        </h3>

                        <div className="space-y-5">
                            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                I am a <span style={{ color: 'var(--accent-primary)' }}>Full Stack Developer</span> with over 2 years of experience in web development,
                                proficient in JavaScript, React.js, Node.js, and PostgreSQL. I specialize in building
                                versatile and high-quality web applications tailored to meet diverse client needs.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                Currently working as a Full Stack Web Developer at <span style={{ color: 'var(--accent-pink)' }}>Supreme Technologies</span>,
                                leading the design and development of comprehensive full stack applications
                                while ensuring responsive design and scalable architecture.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            {[
                                { icon: Code2, value: '2+', label: 'Years Exp', color: 'var(--accent-primary)' },
                                { icon: Briefcase, value: '6+', label: 'Projects', color: 'var(--accent-tertiary)' },
                                { icon: Users, value: '2', label: 'Companies', color: 'var(--accent-pink)' },
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className="group p-5 rounded-2xl text-center transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    <stat.icon
                                        className="w-7 h-7 md:w-8 md:h-8 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                                        style={{ color: stat.color }}
                                    />
                                    <div
                                        className="text-2xl md:text-3xl font-bold mb-1"
                                        style={{
                                            background: 'var(--gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
