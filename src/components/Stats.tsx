'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code2, Award } from 'lucide-react';

const stats = [
    {
        icon: Briefcase,
        value: 2,
        suffix: '+',
        label: 'Years Experience',
        color: '#8b5cf6',
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))'
    },
    {
        icon: Code2,
        value: 6,
        suffix: '+',
        label: 'Projects Completed',
        color: '#ec4899',
        gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.05))'
    },
    {
        icon: Award,
        value: 3,
        suffix: '+',
        label: 'Technologies Mastered',
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))'
    },
];

function AnimatedCounter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span
            ref={ref}
            className="text-5xl md:text-6xl font-bold"
            style={{
                background: `linear-gradient(135deg, ${color}, ${color}aa)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: `0 0 60px ${color}40`
            }}
        >
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3), transparent)'
                    }}
                />
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3), transparent)'
                    }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="group relative p-8 md:p-10 text-center rounded-3xl transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    background: stat.gradient,
                                    border: `1px solid ${stat.color}30`,
                                    boxShadow: `0 4px 40px ${stat.color}10`
                                }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`,
                                        filter: 'blur(30px)'
                                    }}
                                />

                                <div
                                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                                    style={{
                                        background: `${stat.color}20`,
                                        border: `1px solid ${stat.color}30`,
                                        boxShadow: `0 0 30px ${stat.color}20`
                                    }}
                                >
                                    <IconComponent
                                        className="w-8 h-8"
                                        style={{ color: stat.color }}
                                    />
                                </div>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
                                <p className="mt-3 text-base md:text-lg font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
