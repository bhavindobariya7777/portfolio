'use client'

import { motion } from 'framer-motion'
import { Server, Monitor, Database, Brain } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const iconMap: Record<string, any> = { Server, Monitor, Database, Brain }

export default function Skills() {
    return (
        <section id="skills" className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-32">
            <div className="mx-auto w-full px-6 md:px-8 md:w-[750px] lg:w-[900px] lg:px-0">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">Skills</p>
                    <h2 className="bg-gradient-to-r from-[#8b4555] via-[#6366f1] to-[#4338ca] bg-clip-text text-transparent text-4xl font-bold tracking-tight md:text-5xl drop-shadow-[0_0_10px_rgba(79,70,229,0.15)]">
                        Tech I love to build with
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto w-full">
                    {portfolio.skills.map((group, gi) => {
                        const Icon = iconMap[group.icon]
                        return (
                            <motion.div key={group.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: gi * 0.15 }}
                                        className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-all hover:border-[#6366f1]/30">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[var(--text)]">{group.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, i) => (
                                        <motion.span key={item.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                                                     transition={{ duration: 0.4, delay: gi * 0.15 + i * 0.06 }} whileHover={{ scale: 1.05 }}
                                                     className="inline-flex items-center gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 text-sm text-[var(--text)] backdrop-blur-sm">
                                            <span className="h-2 w-2 rounded-full" style={{ background: item.color, boxShadow: `0 0 10px ${item.color}80` }} />
                                            {item.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}