'use client';

import Image from 'next/image';
import { Code2, Briefcase, Users } from 'lucide-react';
import profileImage from '@/assets/MyPicture.jpg';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 relative">
            <div className="container mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                        style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-primary)' }}
                    >
                        About Me
                    </span>
                    <h2 className="section-title">
                        Who <span className="gradient-text">I Am</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Get to know the person behind the code
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                width={500}
                                height={500}
                                className="rounded-2xl object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                            Passionate about creating{' '}
                            <span className="gradient-text">impactful</span> digital experiences
                        </h3>

                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            I am a Full Stack Developer with over 2 years of experience in web development,
                            proficient in JavaScript, React.js, Node.js, and PostgreSQL. I specialize in building
                            versatile and high-quality web applications tailored to meet diverse client needs.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Currently working as a Full Stack Web Developer at Supreme Technologies,
                            leading the design and development of comprehensive full stack applications
                            while ensuring responsive design and scalable architecture.
                        </p>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
                            <div className="glass-card p-4 text-center">
                                <Code2 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-primary)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">2+</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Years</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <Briefcase className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-tertiary)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">6+</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Projects</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                                <Users className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" style={{ color: 'var(--accent-pink)' }} />
                                <div className="text-xl md:text-2xl font-bold gradient-text">2</div>
                                <div className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Companies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
