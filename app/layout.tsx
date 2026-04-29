// @ts-ignore
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
    title: 'Bhavin Dobariya — Sr. Full-Stack Engineer | MERN, AI & Cloud',

    description: 'Full-Stack Developer specializing in MERN, Next.js, and AI-powered applications. Building fast, scalable, and modern web experiences.',

    keywords: [
        'Full Stack Developer',
        'MERN Stack',
        'Next.js Developer',
        'React Developer',
        'Node.js',
        'MongoDB',
        'MySQL',
        'AI Integration',
        'DevOps',
        'Open AI',
        'Ahmedabad Developer'
    ],

    authors: [{ name: 'Dipal Patel' }],

    openGraph: {
        title: 'Bhavin Dobariya — Sr. Full Stack Developer',
        description: 'Building scalable web apps with MERN, Next.js, and AI integration.',
        type: 'website',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
        <head>
            <meta name="apple-mobile-web-app-title" content="Dipal Patel" />
            <script dangerouslySetInnerHTML={{
                __html: 'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
            }} />
        </head>
        <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}