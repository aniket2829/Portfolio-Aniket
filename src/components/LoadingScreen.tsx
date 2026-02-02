'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out animation before hiding
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // Complete loading after fade animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(timer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
            style={{
                background: 'var(--bg-primary)',
                pointerEvents: isLoading ? 'auto' : 'none'
            }}
        >
            {/* Animated background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating orbs with better animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 rounded-full blur-[120px] animate-float"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.2))',
                        top: '-10%',
                        left: '-10%',
                    }}
                />
                <div
                    className="absolute w-72 h-72 rounded-full blur-[100px] animate-float"
                    style={{
                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.2))',
                        bottom: '-5%',
                        right: '-5%',
                        animationDelay: '1s',
                        animationDuration: '8s'
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full blur-[80px] animate-float"
                    style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.2))',
                        top: '40%',
                        right: '20%',
                        animationDelay: '0.5s',
                        animationDuration: '10s'
                    }}
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo container with glow ring */}
                <div className="relative mb-8">
                    {/* Rotating glow ring */}
                    <div
                        className="absolute inset-0 rounded-full animate-spin"
                        style={{
                            background: 'conic-gradient(from 0deg, transparent, var(--accent-primary), var(--accent-pink), var(--accent-tertiary), transparent)',
                            padding: '3px',
                            animationDuration: '3s',
                            width: '120px',
                            height: '120px',
                            top: '-10px',
                            left: '-10px',
                            filter: 'blur(8px)',
                            opacity: 0.6
                        }}
                    />

                    {/* Logo circle */}
                    <div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                            background: 'var(--bg-primary)',
                            border: '2px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.1)'
                        }}
                    >
                        <span
                            className="text-3xl font-bold"
                            style={{
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            AD
                        </span>
                    </div>
                </div>

                {/* Name with typing effect appearance */}
                <h1
                    className="text-xl md:text-2xl font-semibold mb-6 tracking-wider"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <span className="gradient-text">ANIKET DHIMAN</span>
                </h1>

                {/* Modern dots loader */}
                <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2.5 h-2.5 rounded-full animate-bounce"
                            style={{
                                background: 'var(--gradient-primary)',
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: '0.6s'
                            }}
                        />
                    ))}
                </div>

                {/* Subtle tagline */}
                <p
                    className="mt-6 text-sm font-medium tracking-widest uppercase"
                    style={{ color: 'var(--text-muted)' }}
                >
                    Full Stack Developer
                </p>
            </div>

            {/* Bottom gradient line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-pink), var(--accent-tertiary), transparent)'
                }}
            />
        </div>
    );
}
