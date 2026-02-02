'use client';

import { useState } from 'react';
import { Send, Mail, Loader2, Linkedin, Github, MessageSquare, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

// Simple validation helpers
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
};

const validateSubject = (subject: string): boolean => {
    return subject.trim().length >= 3;
};

const validateMessage = (message: string): boolean => {
    return message.trim().length >= 10;
};

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!validateName(formData.name)) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!validateSubject(formData.subject)) {
            newErrors.subject = 'Subject must be at least 3 characters';
        }

        if (!validateMessage(formData.message)) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            toast.success('Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Something went wrong';
            toast.error(message);
        } finally {
            setStatus('idle');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name as keyof FormErrors]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'anidhiman456@gmail.com',
            href: 'mailto:anidhiman456@gmail.com',
            color: '#8b5cf6'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'aniketdhiman2829',
            href: 'https://www.linkedin.com/in/aniketdhiman2829',
            color: '#0077b5'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'aniket2829',
            href: 'https://github.com/aniket2829',
            color: '#6e5494'
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[250px] opacity-15"
                    style={{ background: 'var(--gradient-primary)' }}
                />
                <div
                    className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
                    style={{ background: 'var(--accent-tertiary)' }}
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
                        Contact
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Have a project in mind? Let&apos;s work together to create something amazing
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div
                            className="p-5 md:p-6 rounded-2xl backdrop-blur-sm"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))',
                                border: '1px solid rgba(139, 92, 246, 0.15)',
                                boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15))',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
                                    }}
                                >
                                    <MessageSquare className="w-7 h-7" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}>
                                        Let&apos;s Talk
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        I&apos;d love to hear from you
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {contactMethods.map((method) => (
                                    <a
                                        key={method.label}
                                        href={method.href}
                                        target={method.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.02))',
                                            border: '1px solid rgba(139, 92, 246, 0.1)'
                                        }}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                            style={{
                                                background: `linear-gradient(135deg, ${method.color}20, ${method.color}10)`,
                                                border: `1px solid ${method.color}30`
                                            }}
                                        >
                                            <method.icon className="w-5 h-5" style={{ color: method.color }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: method.color }}>
                                                {method.label}
                                            </div>
                                            <div className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                                                {method.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 p-5 md:p-6 rounded-2xl space-y-5 backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))',
                            border: '1px solid rgba(139, 92, 246, 0.15)',
                            boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 focus:scale-[1.01]"
                                    style={{
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: errors.name ? '1px solid #f87171' : '1px solid rgba(139, 92, 246, 0.2)',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-xs mt-2 font-medium" style={{ color: '#f87171' }}>{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 focus:scale-[1.01]"
                                    style={{
                                        background: 'rgba(139, 92, 246, 0.05)',
                                        border: errors.email ? '1px solid #f87171' : '1px solid rgba(139, 92, 246, 0.2)',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-xs mt-2 font-medium" style={{ color: '#f87171' }}>{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 rounded-xl transition-all duration-300 focus:scale-[1.01]"
                                style={{
                                    background: 'rgba(139, 92, 246, 0.05)',
                                    border: errors.subject ? '1px solid #f87171' : '1px solid rgba(139, 92, 246, 0.2)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                                placeholder="Project inquiry"
                            />
                            {errors.subject && (
                                <p className="text-xs mt-2 font-medium" style={{ color: '#f87171' }}>{errors.subject}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3.5 rounded-xl resize-none transition-all duration-300 focus:scale-[1.01]"
                                style={{
                                    background: 'rgba(139, 92, 246, 0.05)',
                                    border: errors.message ? '1px solid #f87171' : '1px solid rgba(139, 92, 246, 0.2)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && (
                                <p className="text-xs mt-2 font-medium" style={{ color: '#f87171' }}>{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="group w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))',
                                boxShadow: '0 4px 30px rgba(139, 92, 246, 0.3)'
                            }}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
