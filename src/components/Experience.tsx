'use client';

import { Building2, Calendar, GraduationCap, Rocket } from 'lucide-react';

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
        <section id="experience" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full blur-[200px] opacity-15"
                    style={{ background: 'var(--accent-tertiary)' }}
                />
                <div
                    className="absolute -left-40 bottom-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
                    style={{ background: 'var(--accent-pink)' }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.1))',
                            color: 'var(--accent-tertiary)',
                            border: '1px solid rgba(6, 182, 212, 0.2)'
                        }}
                    >
                        <Rocket size={16} />
                        Career
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        My professional journey and career milestones
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.title + exp.company}
                            className="relative flex gap-6 md:gap-10 mb-10 md:mb-12"
                        >
                            {/* Timeline Line & Dot */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="relative w-4 h-4 rounded-full ring-4 ring-[var(--bg-secondary)] z-10 flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: exp.color,
                                        boxShadow: `0 0 15px ${exp.color}50`
                                    }}
                                >
                                    {exp.current && (
                                        <span
                                            className="absolute inset-0 rounded-full animate-ping opacity-40"
                                            style={{ background: exp.color }}
                                        />
                                    )}
                                </div>
                                {index < experiences.length - 1 && (
                                    <div
                                        className="w-0.5 flex-1 min-h-[150px]"
                                        style={{
                                            background: `linear-gradient(to bottom, ${exp.color}60, ${experiences[index + 1]?.color}30, transparent)`
                                        }}
                                    />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 pb-4">
                                <div
                                    className="group p-5 md:p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))',
                                        border: '1px solid rgba(139, 92, 246, 0.15)',
                                        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    {/* Current Badge */}
                                    {exp.current && (
                                        <span
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full mb-4"
                                            style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                                        >
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                            Current Role
                                        </span>
                                    )}

                                    <h3
                                        className="text-lg md:text-xl font-bold mb-2"
                                        style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {exp.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
                                        <span
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                                            style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                                        >
                                            <Building2 size={14} style={{ color: exp.color }} />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} style={{ color: 'var(--accent-tertiary)' }} />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm md:text-base flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1"
                                                style={{ color: 'var(--text-muted)', transitionDelay: `${i * 50}ms` }}
                                            >
                                                <span
                                                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ background: exp.color }}
                                                />
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
                <div className="max-w-4xl mx-auto mt-16 md:mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        <span className="gradient-text">Education</span>
                    </h3>
                    <div
                        className="group p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            boxShadow: '0 4px 40px rgba(139, 92, 246, 0.1)'
                        }}
                    >
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.15))',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
                            }}
                        >
                            <GraduationCap className="w-10 h-10" style={{ color: 'var(--accent-primary)' }} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4
                                className="text-xl md:text-2xl font-bold mb-2"
                                style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
                            >
                                {education.degree}
                            </h4>
                            <p className="text-base md:text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
                                {education.institution}
                            </p>
                            <p
                                className="text-sm flex items-center justify-center sm:justify-start gap-2 px-3 py-1.5 rounded-full inline-flex"
                                style={{
                                    color: 'var(--accent-tertiary)',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    border: '1px solid rgba(6, 182, 212, 0.2)'
                                }}
                            >
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
