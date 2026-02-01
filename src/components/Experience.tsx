'use client';

import { Building2, Calendar, GraduationCap, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'Full Stack Web Developer',
        company: 'Supreme Technologies',
        period: 'Apr 2024 - Present',
        description: [
            'Leading the design and development of comprehensive full stack web applications',
            'Collaborating with product managers and designers to create user-centric interfaces',
            'Managing deployment processes on AWS ensuring scalable and secure applications',
            'Successfully launched 4 full stack web applications tailored to client requirements',
        ],
        current: true,
        color: '#ec4899',
    },
    {
        title: 'Web Developer (Freelance)',
        company: 'CreaoApps',
        period: 'Jan 2023 - Feb 2024',
        description: [
            'Developed and maintained 2 full stack web applications',
            'Improved system efficiency by 30% and reduced load times by 40%',
            'Enhanced user experience through optimized front-end and back-end architecture',
        ],
        current: false,
        color: '#8b5cf6',
    },
];

const education = {
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'Chandigarh Group of Colleges, Landran, Punjab',
    period: '2020 - 2024',
};

export default function Experience() {
    return (
        <section id="experience" className="py-20 md:py-28 relative" style={{ background: 'var(--bg-secondary)' }}>
            {/* Background decoration */}
            <div
                className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-20"
                style={{ background: 'var(--accent-tertiary)' }}
            />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-tertiary)' }}
                    >
                        Career
                    </span>
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        My professional journey and career milestones
                    </p>
                </div>

                {/* Timeline - Mobile Friendly */}
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.title + exp.company}
                            className="relative flex gap-4 md:gap-8 mb-8 md:mb-10"
                        >
                            {/* Timeline Line & Dot */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-4 h-4 rounded-full ring-4 ring-[var(--bg-secondary)] z-10 flex-shrink-0"
                                    style={{ background: exp.color }}
                                >
                                    {exp.current && (
                                        <span
                                            className="absolute w-4 h-4 rounded-full animate-ping opacity-40"
                                            style={{ background: exp.color }}
                                        />
                                    )}
                                </div>
                                {index < experiences.length - 1 && (
                                    <div
                                        className="w-0.5 h-full min-h-[100px]"
                                        style={{ background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.3), transparent)' }}
                                    />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 pb-4">
                                <div className="glass-card p-5 md:p-6">
                                    {/* Current Badge */}
                                    {exp.current && (
                                        <span
                                            className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                                            style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}
                                        >
                                            Current Role
                                        </span>
                                    )}

                                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {exp.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                                        <span className="flex items-center gap-1.5">
                                            <Building2 size={14} style={{ color: exp.color }} />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                                                <span style={{ color: exp.color, marginTop: '6px', fontSize: '8px' }}>●</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="max-w-4xl mx-auto mt-12 md:mt-16">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
                        <span className="gradient-text">Education</span>
                    </h3>
                    <div className="glass-card p-5 md:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))' }}
                        >
                            <GraduationCap className="w-8 h-8" style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{education.degree}</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>{education.institution}</p>
                            <p className="text-sm flex items-center justify-center sm:justify-start gap-1.5 mt-1" style={{ color: 'var(--text-muted)' }}>
                                <Calendar size={14} />
                                {education.period}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
