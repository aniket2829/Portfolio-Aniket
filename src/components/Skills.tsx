'use client';

import { Zap } from 'lucide-react';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiFastapi,
    SiPostgresql,
    SiAmazonwebservices,
    SiDocker,
    SiGit,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiRedis,
    SiMysql
} from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff', category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
    { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'Cloud' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px] opacity-15"
                    style={{ background: 'radial-gradient(circle, var(--accent-primary), transparent)' }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
                    style={{ background: 'var(--accent-pink)' }}
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
                        <Zap size={16} />
                        Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        The tools and technologies I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="group relative p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 backdrop-blur-sm cursor-pointer"
                                style={{
                                    animationDelay: `${index * 0.05}s`,
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))',
                                    border: '1px solid rgba(139, 92, 246, 0.15)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {/* Hover glow effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                                        filter: 'blur(20px)'
                                    }}
                                />

                                <div
                                    className="w-16 h-16 md:w-18 md:h-18 mx-auto mb-4 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                                        border: `1px solid ${skill.color}30`,
                                        boxShadow: `0 0 30px ${skill.color}10`
                                    }}
                                >
                                    <IconComponent
                                        className="w-8 h-8 md:w-9 md:h-9 transition-all duration-300 group-hover:scale-110"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                <h3 className="font-semibold text-sm md:text-base mb-1 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                    {skill.name}
                                </h3>
                                <span
                                    className="text-xs px-2.5 py-1 rounded-full inline-block"
                                    style={{
                                        color: skill.color,
                                        background: `${skill.color}15`
                                    }}
                                >
                                    {skill.category}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Skills */}
                <div className="mt-16 md:mt-20 text-center">
                    <div
                        className="inline-block px-8 md:px-12 py-5 md:py-6 rounded-2xl backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                            border: '1px solid rgba(139, 92, 246, 0.2)',
                            boxShadow: '0 4px 40px rgba(139, 92, 246, 0.1)'
                        }}
                    >
                        <p className="text-sm md:text-base font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Also experienced with:{' '}
                            <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>AdminJS</span> •{' '}
                            <span className="font-semibold" style={{ color: 'var(--accent-tertiary)' }}>Webhooks</span> •{' '}
                            <span className="font-semibold" style={{ color: 'var(--accent-pink)' }}>AWS SQS</span> •{' '}
                            <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Firebase</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
