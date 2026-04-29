'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

// @ts-ignore
const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false })

function Typewriter({ words }: { words: string[] }) {
    const [idx, setIdx] = useState(0)
    const [sub, setSub] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[idx % words.length]
        let speed = deleting ? 105 : 100
        if (!deleting && sub === word) {
            const pause = setTimeout(() => setDeleting(true), 1500)
            return () => clearTimeout(pause)
        }
        if (deleting && sub === '') {
            setDeleting(false)
            setIdx((i) => i + 1)
            return
        }
        const t = setTimeout(() => {
            setSub(deleting ? word.substring(0, sub.length - 1) : word.substring(0, sub.length + 1))
        }, speed)
        return () => clearTimeout(t)
    }, [sub, deleting, idx, words])

    return (
            <span className="bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {sub}
            <span className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[2px] animate-pulse bg-[var(--bg-line)]" />
        </span>
    )
}

export default function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--bg)]">
            <div className="absolute inset-0">
                <ParticleField />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--bg)_80%)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366f1]/10 blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
                className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
            >
                {portfolio.available && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-1.5 text-xs text-[var(--text-muted)] backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Available for work
                        <Sparkles className="h-3 w-3 text-[#22d3ee]" />
                    </motion.div>
                )}

                <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-[var(--text)] md:text-7xl">
                    Hi, I'm {portfolio.name}
                    <br />
                    <Typewriter words={portfolio.roles} />
                </h1>

                <p className="mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                    {portfolio.tagline}
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-[#23478f] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#6366f1]/30 transition-all hover:bg-[#22378f] hover:shadow-[#6366f1]/50">
                        View Projects
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    {/*<a href={portfolio.resumeUrl} className="group inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-7 py-3.5 font-medium text-[var(--text)] backdrop-blur-sm transition-all hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10">*/}
                    {/*    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />*/}
                    {/*    Download Resume*/}
                    {/*</a>*/}
                </div>
            </motion.div>
        </section>
    )
}