'use client';

import { useState, useEffect } from 'react';

const roles = [
    'Full Stack Developer',
    'Node.js Expert',
    'React Specialist',
    'Database Architect',
    'Problem Solver'
];

export default function TypeWriter() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentRole.length) {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    return (
        <span className="inline-flex items-center">
            <span
                style={{
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink), var(--accent-tertiary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 3s ease infinite'
                }}
            >
                {currentText}
            </span>
            <span
                className="ml-0.5 inline-block w-0.5 h-6 md:h-8 rounded-full animate-pulse"
                style={{
                    background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-pink))',
                    boxShadow: '0 0 10px var(--accent-primary)'
                }}
            />
        </span>
    );
}
