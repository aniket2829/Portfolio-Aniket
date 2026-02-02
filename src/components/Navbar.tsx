'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-3 backdrop-blur-xl glass' : 'py-3 md:py-5'
        }`}
      style={{
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#home"
          className="group relative flex items-center gap-2"
        >
          <span
            className="text-xl md:text-2xl font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Outfit, sans-serif'
            }}
          >
            AD
          </span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-pink))' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--glass-bg)' }}
              />
              <span className="relative z-10 group-hover:text-[var(--text-primary)] transition-colors duration-300">
                {link.name}
              </span>
            </Link>
          ))}
          <div className="mx-2">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="group relative ml-2 px-5 py-2 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
              color: 'white'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} />
              Hire Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              color: 'var(--text-primary)',
              background: isMobileMenuOpen ? 'var(--glass-bg)' : 'transparent',
              border: '1px solid var(--glass-border)'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        style={{
          background: 'var(--bg-primary)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div
          className="mx-4 my-3 p-4 rounded-xl"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)'
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  color: 'var(--text-secondary)',
                  animationDelay: `${index * 50}ms`
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
                color: 'white'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles size={14} />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
