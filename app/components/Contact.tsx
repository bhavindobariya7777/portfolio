'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { portfolio } from '../../data/portfolio'

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
)
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
)


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSending(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (data.success) {
                setToast({ type: 'success', msg: 'Message sent! I\'ll reply within 24 hours 🚀' })
                setForm({ name: '', email: '', message: '' })
            } else {
                setToast({ type: 'error', msg: 'Something went wrong. Try again.' })
            }
        } catch {
            setToast({ type: 'error', msg: 'Something went wrong. Try again.' })
        } finally {
            setSending(false)
            setTimeout(() => setToast(null), 3500)
        }
    }

    const contactCards = [
        { icon: Mail, label: 'Email', value: portfolio.email, href: `https://mail.google.com/mail/?view=cm&to=${portfolio.email}`  },
        { icon: LinkedinIcon, label: 'LinkedIn', value: 'Dipal Patel', href: portfolio.socials.linkedin },
        { icon: GithubIcon, label: 'GitHub', value: 'Dipal Patel', href: portfolio.socials.github },
        { icon: MapPin, label: 'Location', value: portfolio.location  },
    ]

    return (
        <section id="contact" className="relative w-full border-t border-[var(--border-subtle)] bg-[var(--bg)] py-32">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 text-center">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-names)]">Contact</p>
                    <h2 className="text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">Let's Build Something Great</h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h3 className="mb-4 text-2xl font-semibold text-[var(--text)]">Get in touch</h3>
                        <p className="mb-8 text-[var(--text-muted)]">Have a project in mind? Want to collaborate? Drop me a line — I'll get back within 24 hours.</p>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {contactCards.map((c) => (
                                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                                   className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-4 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10 text-[#6366f1] group-hover:bg-[#6366f1]/20">
                                        <c.icon className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-[var(--text-muted)]">{c.label}</p>
                                        <p className="truncate text-sm text-[var(--text)]">{c.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>


                    </motion.div>

                    <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                 className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 backdrop-blur-xl">
                        <div className="mb-5">
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Name</label>
                            <input name="name" required value={form.name} onChange={handleChange} placeholder="Enter Your Name"
                                   className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50" />
                        </div>
                        <div className="mb-5">
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Email</label>
                            <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"
                                   className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50" />
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 block text-xs uppercase tracking-wider text-[var(--text-muted)]">Message</label>
                            <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project..."
                                      className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all focus:border-[#6366f1]/50" />
                        </div>
                        <button type="submit" disabled={sending}
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-6 py-3.5 font-medium text-white shadow-lg shadow-[#6366f1]/30 transition-all hover:bg-[#4f46e5] disabled:opacity-60">
                            {sending ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : (<>Send Message<Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>)}
                        </button>
                    </motion.form>
                </div>
            </div>

            {toast && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                            className={`fixed bottom-8 right-8 z-[120] flex items-center gap-3 rounded-xl border px-5 py-3 backdrop-blur-xl ${
                                toast.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-rose-500/30 bg-rose-500/10 text-rose-300'
                            }`}>
                    <CheckCircle2 className="h-5 w-5" />
                    {toast.msg}
                </motion.div>
            )}
        </section>
    )
}