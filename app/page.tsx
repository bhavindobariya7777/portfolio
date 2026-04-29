'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import IntroVideo from "@/app/components/IntroVideo";
import Stats from './components/Stats'
import Contact from './components/Contact'

// const Cursor = dynamic(() => import('./components/Cursor'), { ssr: false })

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading && <Loader />}
            {/*<Cursor />*/}
            <Navbar />

            <main className="relative">
                <Hero />
                <About />
                <IntroVideo />
                <Skills />
                <Projects />

                <Stats />
                <Contact />

                <footer className="border-t border-white/10 py-8 text-center text-sm text-[#94a3b8]">
                    © {new Date().getFullYear()} Dipal Patel. Crafted with Next.js, Three.js & Framer Motion.
                </footer>
            </main>
        </>
    )
}