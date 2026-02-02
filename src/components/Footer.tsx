'use client';

import { Github, Linkedin, Heart, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/aniket2829', color: '#8b5cf6' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/aniketdhiman2829', color: '#0077b5' },
    { name: 'Email', icon: Mail, href: 'mailto:anidhiman456@gmail.com', color: '#ec4899' },
];

const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/contact' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-20 pb-10 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
            {/* Top gradient line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-pink), var(--accent-tertiary), transparent)' }}
            />

            {/* Background orb */}
            <div
                className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 pointer-events-none"
                style={{ background: 'var(--gradient-primary)' }}
            />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <Link
                            href="/#home"
                            className="inline-block mb-5"
                        >
                            <span
                                className="text-3xl font-bold"
                                style={{
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontFamily: 'Outfit, sans-serif'
                                }}
                            >
                                Aniket Dhiman
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0 mb-6" style={{ color: 'var(--text-secondary)' }}>
                            Full Stack Developer building scalable web applications with modern technologies and a passion for clean code.
                        </p>
                        {/* Scroll to top button */}
                        <button
                            onClick={scrollToTop}
                            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                color: 'var(--text-secondary)'
                            }}
                        >
                            <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
                            Back to Top
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4
                            className="font-bold mb-6 text-sm uppercase tracking-wider"
                            style={{ color: 'var(--accent-primary)', fontFamily: 'Outfit, sans-serif' }}
                        >
                            Quick Links
                        </h4>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium hover:text-[var(--accent-primary)] transition-all duration-300 hover:translate-x-1"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h4
                            className="font-bold mb-6 text-sm uppercase tracking-wider"
                            style={{ color: 'var(--accent-primary)', fontFamily: 'Outfit, sans-serif' }}
                        >
                            Connect
                        </h4>
                        <div className="flex items-center justify-center md:justify-end gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${social.color}15, ${social.color}05)`,
                                        border: `1px solid ${social.color}30`,
                                        color: 'var(--text-secondary)'
                                    }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} className="transition-colors duration-300 group-hover:text-[var(--accent-primary)]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
