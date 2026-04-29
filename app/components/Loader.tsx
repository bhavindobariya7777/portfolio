'use client'

import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a0a]"
        >
            <div className="flex flex-col items-center gap-6">
                <div className="relative h-20 w-20">
                    <motion.span
                        className="absolute inset-0 rounded-full border-2 border-[#6366f1]/30"
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                    />
                    <motion.span
                        className="absolute inset-2 rounded-full border-2 border-[#22d3ee]/40"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#6366f1] border-r-[#22d3ee]"
                    />
                </div>
                <motion.p
                    className="text-sm tracking-[0.3em] text-[#94a3b8]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                >
                    LOADING
                </motion.p>
            </div>
        </motion.div>
    )
}
