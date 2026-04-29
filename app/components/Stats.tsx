'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (v) => Math.floor(v))

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, { duration: 2, ease: 'easeOut' })
            return controls.stop
        }
    }, [inView, value, count])

    return (
        <span
            ref={ref}
            className="bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#22d3ee] bg-clip-text text-transparent"
        >
  <motion.span>{rounded}</motion.span>{suffix}
</span>
    )
}

export default function Stats() {
    return (
        <section id="stats" className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">Milestones</p>
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">What I’ve Built So Far</h2>
                </motion.div>

                <div className="mb-24 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {portfolio.stats.map((s, i) => (
                        <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center">
                            <div className="text-4xl font-bold tracking-tight md:text-5xl">
                                <Counter value={s.value} suffix={s.suffix} />
                            </div>
                            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">{s.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="relative mx-auto max-w-3xl">
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
                                style={{ transformOrigin: 'top' }}
                                className="absolute left-4 top-2 h-full w-[2px] bg-gradient-to-b from-[#6366f1] via-[#22d3ee] to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="relative">
                        {/* Center vertical line */}
                        <div className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-[#6366f1]/20 via-[#6366f1]/60 to-[#6366f1]/20 md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {portfolio.timeline.map((t, i) => (
                                <motion.div
                                    key={t.year}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    className={`relative pl-14 md:grid md:grid-cols-2 md:gap-8 md:pl-0`}
                                >
                                    {/* Dot — always on center line, vertically centered to card */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 + 0.3 }}
                                        className="absolute left-[4px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#6366f1] ring-4 ring-[#6366f1]/20 md:left-1/2 md:-translate-x-1/2 z-10"
                                    />

                                    {/* Card — left side for even, right side for odd */}
                                    <div
                                        className={`
            group
            ${i % 2 === 0
                                            ? 'md:col-start-1 md:pr-12 md:text-right'
                                            : 'md:col-start-2 md:pl-12 md:text-left'}
          `}
                                    >
                                        <div className="
            rounded-xl border border-white/10
            bg-white/5 backdrop-blur-sm
            p-5
            shadow-[0_4px_24px_rgba(99,102,241,0.07)]
            transition-all duration-300
            hover:bg-white/10 hover:border-[#6366f1]/30
            hover:shadow-[0_8px_32px_rgba(99,102,241,0.18)]
            hover:-translate-y-1
          ">
                                            <span className="text-xs font-mono text-[var(--text-names)]">{t.year}</span>
                                            <h3 className="mt-1 text-lg font-semibold text-[var(--text)]">{t.title}</h3>
                                            <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{t.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}