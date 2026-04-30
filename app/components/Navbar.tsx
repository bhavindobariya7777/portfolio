'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
// @ts-ignore
import { Menu, X } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    // { label: 'Introduction', href: '#Introduction' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },

]

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] transition-all hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
            )}
        </button>
    )
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled
                    ? 'border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


                <a href="#home" className="flex items-center gap-2">
                    <img src="/BD-logo.png" alt="DP Logo" className="h-6 w-6" />
                    <span className="hidden sm:block font-semibold text-[var(--text)]">
            {portfolio.name}
          </span>
                </a>


                <ul className="hidden items-center gap-8 lg:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="relative text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* RIGHT SIDE */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="rounded-lg border border-[#6366f1]/40 bg-[#6366f1]/10 px-4 py-2 text-sm hover:bg-[#6366f1]/20"
                    >
                        Let's Talk
                    </a>
                </div>


                <div className="flex lg:hidden items-center gap-2">
                    <ThemeToggle />
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1], // smooth premium easing
                        }}
                        style={{
                            background: 'var(--menu-bg)',
                            borderColor: 'var(--menu-border)'
                        }}
                        className="absolute top-full left-0 w-full lg:hidden
  backdrop-blur-3xl
  border-t
  shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >


                        <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[500px] -translate-x-1/2 bg-[#6366f1]/20 blur-[120px]" />

                        <ul className="relative z-10 flex flex-col gap-2 px-6 py-6">

                            {links.map((l, i) => (
                                <motion.li
                                    key={l.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <a
                                        href={l.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const el = document.querySelector(l.href)
                                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                                            setTimeout(() => setOpen(false), 200)
                                        }}
                                        className="block rounded-xl px-4 py-3 text-sm
              text-[var(--text-muted)]
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:text-white
              hover:border-[#6366f1]/40
              hover:bg-[#6366f1]/10
              transition-all duration-300"
                                    >
                                        {l.label}
                                    </a>
                                </motion.li>
                            ))}


                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    const el = document.querySelector('#contact')
                                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                                    setTimeout(() => setOpen(false), 200)
                                }}
                                className="mt-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee]
          px-4 py-3 text-center font-medium text-white
          shadow-lg shadow-[#6366f1]/30
          hover:shadow-[#6366f1]/50 transition-all"
                            >
                                Let’s Talk
                            </motion.a>

                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}