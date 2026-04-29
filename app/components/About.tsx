'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Layers, GraduationCap, MapPin, Coffee, HelpCircle } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const iconMap: Record<string, any> = { Code2, Layers, GraduationCap, MapPin, Coffee }

export default function About() {
    const { about } = portfolio

    return (
        <section id="about" className="relative w-full border-t border-[var(--border-subtle)] py-32 bg-[var(--bg)]">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
                    {/*<p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#22d3ee]">About</p>*/}
                    <h2 className="text-4xl font-bold tracking-tight text-[#22378f] md:text-5xl">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative lg:col-span-2">
                        <div className="relative mx-auto w-full max-w-sm">
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#22d3ee] opacity-60 blur-2xl" />
                            <div className="relative overflow-hidden rounded-2xl border-2 border-[#6366f1]/40">
                                <Image src={portfolio.photo} alt={portfolio.name} width={600} height={600} className="h-full w-full object-cover" unoptimized />
                            </div>
                            <div className="absolute -bottom-4 -right-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-3 shadow-xl backdrop-blur-md">
                                <p className="text-xs text-[var(--text-names)]">Experience</p>
                                <p className="font-semibold text-[var(--text)]">{about?.experience || 'N/A'}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
                        <p className="mb-8 whitespace-pre-line text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                            {about?.story || 'No story added yet.'}
                        </p>

                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {about?.highlights?.map((h, i) => {
                                const Icon = iconMap[h.icon] || HelpCircle
                                return (
                                    <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                                                className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 transition-all hover:-translate-y-1 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5">
                                        <Icon className="mb-3 h-6 w-6 text-[#6366f1] transition-transform group-hover:scale-110" />
                                        <h3 className="mb-1 font-semibold text-[var(--text)]">{h.title}</h3>
                                        <p className="text-xs leading-relaxed text-[var(--text-muted)]">{h.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {about?.funFacts?.map((f) => {
                                const Icon = iconMap[f.icon] || Coffee
                                return (
                                    <div key={f.label} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-muted)]">
                                        <Icon className="h-4 w-4 text-[#22d3ee]" />
                                        {f.label}
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}