'use client'

import { motion } from 'framer-motion'
import { Monitor, Server, Database, Cloud, Brain, Link } from "lucide-react"
import { portfolio } from '../../data/portfolio'

const iconMap: Record<string, any> = { Server, Monitor, Database, Cloud, Brain, Link }

export default function Skills() {
    return (
        <section id="skills" className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-24">

            <div className="mx-auto w-full max-w-[1232px] px-6 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">
                        Skills
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8b4555] via-[#6366f1] to-[#4338ca] bg-clip-text text-transparent">
                        Tools That Power My Work
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.skills.map((group, i) => {
                        const Icon = iconMap[group.icon]

                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="h-full min-h-[240px] flex flex-col justify-between group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition-none hover:-translate-y-[2px] hover:shadow-md"
                            >
                                <div>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1]">
                                            {Icon && <Icon className="h-5 w-5" />}
                                        </div>

                                        <h3 className="text-xl font-semibold text-[var(--text)]">
                                            {group.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item.name}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-[12.5px] text-[var(--text)] cursor-default hover:scale-[1.03] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:text-[#6366f1] transition-none"
                                            >
                                                <span
                                                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                                                    style={{
                                                        background: item.color,
                                                        boxShadow: `0 0 5px ${item.color}70`,
                                                    }}
                                                />
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}