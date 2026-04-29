'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
)

export default function Projects() {
    return (
        <section id="projects" className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg)] py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">Projects</p>
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">Projects & Learnings</h2>
                    <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
                        Each project represents a challenge solved, a concept mastered, and a step forward in my development journey.
                    </p>
                </motion.div>

                {/*<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">*/}
                {/*    {portfolio.projects.map((p, i) => (*/}
                {/*        <motion.div key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>*/}
                {/*            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.15} glareColor="#6366f1" glarePosition="all" scale={1.02} transitionSpeed={1500} className="h-full">*/}
                {/*                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] backdrop-blur-xl transition-all hover:border-[#6366f1]/40">*/}
                {/*                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)]">*/}
                {/*                        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />*/}
                {/*                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />*/}
                {/*                    </div>*/}
                {/*                    <div className="flex flex-1 flex-col p-6">*/}
                {/*                        <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{p.title}</h3>*/}
                {/*                        <p className="mb-4 line-clamp-2 flex-1 text-sm text-[var(--text-muted)]">{p.description}</p>*/}
                {/*                        <div className="mb-4 flex flex-wrap gap-1.5">*/}
                {/*                            {p.tech.map((t) => (*/}
                {/*                                <span key={t} className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">{t}</span>*/}
                {/*                            ))}*/}
                {/*                        </div>*/}
                {/*                        <div className="flex gap-2">*/}
                {/*                            <a href={p.github} target="_blank" rel="noreferrer"*/}
                {/*                               className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition-all hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10" aria-label="GitHub">*/}
                {/*                                <GithubIcon />*/}
                {/*                            </a>*/}
                {/*                            <a href={p.live} target="_blank" rel="noreferrer"*/}
                {/*                               className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition-all hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/10" aria-label="Live Demo">*/}
                {/*                                <ExternalLink className="h-4 w-4" />*/}
                {/*                            </a>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </Tilt>*/}
                {/*        </motion.div>*/}
                {/*    ))}*/}
                {/*</div>*/}




                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {portfolio.projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="h-full"
                        >
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] backdrop-blur-xl transition-all duration-300 hover:border-[#6366f1]/40 hover:shadow-lg">

                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-secondary)]">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        unoptimized
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">
                                        {p.title}
                                    </h3>

                                    <p className="mb-4 line-clamp-2 flex-1 text-sm text-[var(--text-muted)]">
                                        {p.description}
                                    </p>

                                    <div className="mb-4 flex flex-wrap gap-1.5">
                                        {p.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]"
                                            >
                {t}
              </span>
                                        ))}
                                    </div>


                                    <div className="flex gap-2">


                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-1 px-3 h-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] text-sm transition-all hover:border-[#22d3ee]/50 hover:bg-[#22d3ee]/10"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}