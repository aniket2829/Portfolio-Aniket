'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] animate-float opacity-40"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.3))',
                        top: '-20%',
                        left: '-10%',
                    }}
                />
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-float opacity-30"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.3))',
                        bottom: '-15%',
                        right: '-10%',
                        animationDelay: '2s',
                        animationDuration: '10s'
                    }}
                />
                <div
                    className="absolute w-[300px] h-[300px] rounded-full blur-[80px] animate-float opacity-25"
                    style={{
                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(6, 182, 212, 0.3))',
                        top: '40%',
                        right: '20%',
                        animationDelay: '1s',
                        animationDuration: '8s'
                    }}
                />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto text-center relative z-10 px-4 py-4">
                {/* Available badge */}
                <div
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10 animate-slide-up backdrop-blur-sm"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.1)',
                        animationDelay: '0.1s'
                    }}
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Available for new opportunities</span>
                </div>

                {/* Name with enhanced styling */}
                <div className="mb-6">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 animate-slide-up tracking-tight"
                        style={{ animationDelay: '0.2s', fontFamily: 'Outfit, sans-serif' }}
                    >
                        <span
                            className="inline-block"
                            style={{
                                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-pink) 50%, var(--accent-tertiary) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            ANIKET
                        </span>
                    </h1>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold animate-slide-up tracking-tight"
                        style={{
                            animationDelay: '0.25s',
                            fontFamily: 'Outfit, sans-serif',
                            color: 'var(--text-primary)'
                        }}
                    >
                        DHIMAN
                    </h1>
                </div>

                {/* Typewriter role */}
                <div
                    className="mb-6 animate-slide-up"
                    style={{ animationDelay: '0.3s' }}
                >
                    <span
                        className="inline-block px-6 py-2.5 rounded-full text-base md:text-xl font-semibold backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15))',
                            color: 'var(--accent-primary)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.15), inset 0 0 20px rgba(139, 92, 246, 0.05)'
                        }}
                    >
                        <TypeWriter />
                    </span>
                </div>

                {/* Description */}
                <p
                    className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-slide-up leading-relaxed px-4"
                    style={{ animationDelay: '0.35s', color: 'var(--text-secondary)' }}
                >
                    Expert in <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Node.js</span>, <span className="font-semibold" style={{ color: 'var(--accent-tertiary)' }}>React</span>, <span className="font-semibold" style={{ color: 'var(--accent-pink)' }}>Next.js</span> and <span className="font-semibold" style={{ color: 'var(--accent-blue)' }}>PostgreSQL</span>.
                    <br className="hidden md:block" />
                    Building scalable, efficient web applications with modern architecture.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up px-4"
                    style={{ animationDelay: '0.4s' }}
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                        style={{
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
                            color: 'white'
                        }}
                    >
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        style={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            border: '2px solid rgba(139, 92, 246, 0.4)',
                            color: 'var(--text-primary)'
                        }}
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Social Links */}
                <div
                    className="flex items-center justify-center gap-5 animate-slide-up"
                    style={{ animationDelay: '0.5s' }}
                >
                    {[
                        { icon: Github, href: 'https://github.com/aniket2829', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/aniketdhiman2829', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:anidhiman456@gmail.com', label: 'Email' },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                color: 'var(--text-secondary)'
                            }}
                            aria-label={social.label}
                        >
                            <social.icon size={22} className="transition-colors duration-300 group-hover:text-[var(--accent-primary)]" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
