'use client';

import { useState } from 'react';
import { Github, ArrowUpRight, ExternalLink, Folder, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    gradient: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    githubUrlFrontend?: string;
    githubUrlBackend?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: 'Website Audit Tool',
        description: 'Built an SEO Website Audit Tool with Keyword, Headline, and Page Speed Insights. Integrated background jobs using RabbitMQ and AWS SQS to extract URLs via a scalable queue-based system.',
        gradient: 'from-purple-500 to-pink-600',
        tags: ['React.js', 'Node.js', 'RabbitMQ', 'MySQL', 'AWS SQS', 'SEO'],
        featured: true,
        liveUrl: 'https://www.unmiss.com',
    },
    {
        title: 'Chatbot System',
        description: 'Developed an AI chatbot platform combining Next.js 16, FastAPI, PostgreSQL, and OpenAI API, all containerized with Docker for seamless development and deployment.',
        gradient: 'from-pink-500 to-rose-600',
        tags: ['Chatbot', 'AI', 'Full Stack', 'Docker', 'OpenAI API', 'Next.js 16', 'FastAPI', 'PostgreSQL'],
        githubUrlFrontend: 'https://github.com/aniket2829/chatbot-frontend',
        githubUrlBackend: 'https://github.com/aniket2829/chatbot-system',
        featured: true,
    },
    {
        title: 'VirtualMD: AI Health & Wellness Advisor',
        description: 'VirtualMD is an AI-powered healthcare platform that delivers instant, personalized medical insights and wellness guidance through a secure, intuitive chat interface.',
        gradient: 'from-green-500 to-teal-600',
        tags: ['React.js', 'FastAPI', 'Claude API', 'PostgreSQL', 'Redis', 'Firebase'],
        featured: true,
        liveUrl: 'https://www.virtualmd.app',
    },
];

const gradientColors: { [key: string]: { from: string; to: string } } = {
    'from-purple-500 to-pink-600': { from: '#8b5cf6', to: '#ec4899' },
    'from-pink-500 to-rose-600': { from: '#ec4899', to: '#e11d48' },
    'from-green-500 to-teal-600': { from: '#22c55e', to: '#0d9488' },
};

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full blur-[200px] opacity-15"
                    style={{ background: 'var(--accent-pink)' }}
                />
                <div
                    className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[180px] opacity-10"
                    style={{ background: 'var(--accent-primary)' }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.1))',
                            color: 'var(--accent-pink)',
                            border: '1px solid rgba(236, 72, 153, 0.2)'
                        }}
                    >
                        <Folder size={16} />
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        A selection of my recent work and client projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {currentProjects.map((project, index) => {
                        const colors = gradientColors[project.gradient] || { from: '#8b5cf6', to: '#ec4899' };
                        return (
                            <div
                                key={`${project.title}-${index}`}
                                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.04))',
                                    border: '1px solid rgba(139, 92, 246, 0.15)',
                                    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {/* Gradient top accent */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                                    style={{ background: `linear-gradient(90deg, ${colors.from}, ${colors.to})` }}
                                />

                                {/* Hover glow effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `radial-gradient(circle at top, ${colors.from}20, transparent 60%)`,
                                        filter: 'blur(40px)'
                                    }}
                                />

                                <div className="p-5 md:p-6">
                                    {/* Featured badge */}
                                    {project.featured && (
                                        <span
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full mb-4"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.from}20, ${colors.to}10)`,
                                                color: colors.from,
                                                border: `1px solid ${colors.from}30`
                                            }}
                                        >
                                            ★ Featured
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h3
                                        className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 transition-colors duration-300"
                                        style={{ color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {project.title}
                                        <ArrowUpRight
                                            size={18}
                                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            style={{ color: colors.from }}
                                        />
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm mb-4 line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 text-xs rounded-full font-medium transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `${colors.from}15`,
                                                    color: colors.from,
                                                    border: `1px solid ${colors.from}20`
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span
                                                className="px-3 py-1.5 text-xs rounded-full font-medium"
                                                style={{
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    color: 'var(--text-muted)'
                                                }}
                                            >
                                                +{project.tags.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Links - always visible on mobile */}
                                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300" style={{ borderColor: 'rgba(139, 92, 246, 0.15)' }}>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                                                    color: 'white',
                                                    boxShadow: `0 4px 20px ${colors.from}40`
                                                }}
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                        )}
                                        {project?.githubUrl && project?.githubUrl !== '#' && (
                                            <a
                                                href={project?.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.2)'
                                                }}
                                            >
                                                <Github size={14} />
                                                Code
                                            </a>
                                        )}
                                        {project?.githubUrlFrontend && (
                                            <a
                                                href={project?.githubUrlFrontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.2)'
                                                }}
                                            >
                                                <Github size={14} />
                                                Frontend
                                            </a>
                                        )}
                                        {project?.githubUrlBackend && (
                                            <a
                                                href={project?.githubUrlBackend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                                                style={{
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.2)'
                                                }}
                                            >
                                                <Github size={14} />
                                                Backend
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-10">
                        {/* Previous Button */}
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                            style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => goToPage(page)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:scale-105 ${currentPage === page ? 'text-white' : ''
                                        }`}
                                    style={{
                                        background: currentPage === page
                                            ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-pink))'
                                            : 'var(--glass-bg)',
                                        border: currentPage === page
                                            ? 'none'
                                            : '1px solid var(--glass-border)',
                                        color: currentPage === page ? 'white' : 'var(--text-primary)',
                                        boxShadow: currentPage === page ? '0 4px 20px rgba(139, 92, 246, 0.3)' : 'none'
                                    }}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                            style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                {/* View More Button */}
                <div className="text-center mt-10">
                    <a
                        href="https://github.com/aniket2829"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            color: 'var(--text-primary)',
                            boxShadow: '0 4px 30px rgba(139, 92, 246, 0.1)'
                        }}
                    >
                        <Github size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                        View More on GitHub
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
