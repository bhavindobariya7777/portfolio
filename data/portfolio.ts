export const portfolio = {
    name: "Bhavin Dobariya",
    // initials: "DP",
    role: "Senior Full-Stack Developer",
    email: "bhavindobariya7777@gmail.com",
    location: "Ahmedabad,Gujarat,India",
    resumeUrl: "/resume.pdf",
    photo: "/profile-img.png",
    available: true,
    tagline:
        "I design and develop end-to-end web experiences, blending intuitive UI with scalable architecture, cloud infrastructure, and intelligent integrations.",
    socials: {
        github: "https://github.com/bhavindobariya7777",
        linkedin: "https://www.linkedin.com/in/bhavin-dobariya-8ab629165/",

    },
    roles: ["Senior Full-Stack Developer", "MERN Stack Engineer", "Next.JS Developer"],
    about: {
        story:
          "I’m a technology leader and senior developer with over 12 years of experience designing and building scalable, high-performance digital systems. My expertise spans full-stack development and system architecture, with a strong focus on creating solutions that are efficient, secure, and built to scale.\n" +
            "\n" +
            "My approach goes beyond just writing code — I focus on structuring systems that are maintainable in the long run. From defining architecture to ensuring code quality and security, I aim to build products that are functional, reliable and future-ready.\n" +
            "\n" +

            "What Defines My Work\n" +
            "\n" +
            "• I think in systems and architecture, not just individual features\n" +
            "• I prioritize clean, maintainable, and scalable code\n" +
            "• I focus on performance, security, and long-term reliability\n" +
            "• I bring a balance of technical depth and practical problem-solving",

        experience: "12+ Year Experience",
        highlights: [
            {
                title: "Clean Code",
                description: "Readable, testable, and maintainable code is non-negotiable in every line I write.",
                icon: "Code2",
            },
            {
                title: "Scalable Systems",
                description: "I architect systems that grow gracefully — from a hundred users to a million.",
                icon: "Layers",
            },
            {
                title: "Continuous Learning",
                description: "Tech evolves every day, and so do I — always exploring what's next.",
                icon: "GraduationCap",
            },
        ],
        funFacts: [
            { label: "Ahmedabad, India", icon: "MapPin" },
            // { label: "Powered by coffee", icon: "Coffee" },
            { label: "Open-source contributor", icon: "Github" },
        ],
    },
    skills: [
        {
            category: "Frontend",
            icon: "Monitor",
            items: [
                { name: "React", color: "#61dafb" },
                { name: "Next.js", color: "#e10098" },
                { name: "Vue.js", color: "#42b883" },
                { name: "Nuxt.js", color: "#00dc82" },
                { name: "Angular", color: "#dd0031" },
                { name: "Ant Design", color: "#0170fe" },
                { name: "TypeScript", color: "#3178c6" },
                { name: "Tailwind CSS", color: "#38bdf8" },
                { name: "PWA", color: "#5a0fc8" },
            ],
        },

        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", color: "#339933" },
                { name: "Express.js", color: "#ee0000" },
                { name: "PHP", color: "#777bb4" },
                { name: "Laravel", color: "#ff2d20" },
                { name: "Go", color: "#00add8" },
                { name: "REST APIs", color: "#22c55e" },
                { name: "Microservices", color: "#6366f1" },
                { name: "GraphQL", color: "#e10098" },
            ],
        },

        {
            category: "Database",
            icon: "Database",
            items: [
                { name: "MongoDB", color: "#47a248" },
                { name: "PostgreSQL", color: "#e10098" },
                { name: "Redis", color: "#dc382d" },
                { name: "Elasticsearch", color: "#ff9900" },
            ],
        },

        {
            category: "Cloud",
            icon: "Cloud",
            items: [
                { name: "AWS", color: "#ff9900" },
                { name: "Docker", color: "#2496ed" },
                { name: "CI/CD", color: "#22c55e" },
                { name: "Lambda", color: "#ff9900" },
                { name: "S3", color: "#569a31" },
                { name: "DynamoDB", color: "#4053d6" },
                { name: "Kubernetes", color: "#326ce5" },
                { name: "Jenkins", color: "#d24939" },
                { name: "Terraform", color: "#7b42bc" },
                { name: "Ansible", color: "#ee0000" },
            ],
        },

        {
            category: "Python & AI",
            icon: "Brain",
            items: [
                { name: "Python", color: "#3776ab" },
                { name: "Django", color: "#092e20" },
                { name: "Flask", color: "#ffca28" },
                { name: "FastAPI", color: "#009688" },
                { name: "TensorFlow", color: "#ff6f00" },
                { name: "PyTorch", color: "#ee4c2c" },
                { name: "Scikit-learn", color: "#f7931e" },
                { name: "NLP", color: "#8b5cf6" },
                { name: "Computer Vision", color: "#0ea5e9" },
                { name: "AI Automation", color: "#22c55e" },
                { name: "Celery", color: "#a4c639" },
                { name: "Apache Airflow", color: "#017cee" },
            ],
        },

        {
            category: "Integrations",
            icon: "Link",
            items: [
                { name: "Stripe", color: "#635bff" },
                { name: "PayPal", color: "#003087" },
                { name: "OpenAI API", color: "#10a37f" },
                { name: "Telegram API", color: "#0088cc" },
                { name: "Firebase", color: "#ffca28" },
                { name: "Auth0", color: "#eb5424" },
                { name: "Shopify", color: "#96bf48" },
                { name: "WooCommerce", color: "#96588a" },
                { name: "Contentful", color: "#2478cc" },
                { name: "Strapi", color: "#8e75ff" },
                { name: "Algolia", color: "#5468ff" },
                { name: "Supabase", color: "#3ecf8e" },
            ],
        },
    ],
    projects: [

        {
            title: "ReUp – AI Marketplace Platform",
            description:
                "Built a modern AI marketplace platform enabling creators to showcase and sell tools through live demos, real-time interaction, and a responsive UI.",
            image: "reup.png",
            tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "WebSockets", "MongoDB", "Framer Motion"],
            live: "https://reup.live/",
        },



        {
            title: "PropFTX – Fractional Real Estate Investment Platform",
            description:
                "Developed a modern proptech platform enabling users to invest in real estate through fractional ownership, powered by AI insights, blockchain-based transparency, and a secure investment ecosystem.",
            image: "propftx-img.jpg",
            tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Blockchain", "Web3", "MongoDB", "AWS"],
            live: "https://www.propftx.com/",
        },

        {
            title: "Rick’s Beach Rental Platform",
            description:
                "Built a high-performance full-stack system for rental bookings with real-time data handling, secure payments, and cloud-scalable architecture.",
            image:
                "Beach-rentals-img.jpg",
            tech:["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Stripe", "Tailwind CSS"],

            live: "https://www.waterboyrentals.com/",
        },

        {
            title: "Real-Time Chat Application",
            description:
                "A scalable chat system with instant messaging, typing indicators, and seamless communication.\n" +
                "Built with real-time architecture for low latency and high reliability",
            image:
                "chatApp-img.jpg",
            tech: ["Socket.IO", "Node.js", "React", "MongoDB", "Express"],

            live: "https://chat-app-main-seven.vercel.app",
        },
        {
            title: "Eyevestor Platform",
            description:
                "A clean and responsive investor platform UI built with Next.js and Tailwind CSS.\n" +
                "Designed for seamless user experience with modern layouts and intuitive navigation.",
            image:
                "Eyevestor-img.jpg",
            tech: ["Next.js", "Tailwind", "JavaScript"],

            live: "https://eyevestor-website.vercel.app",
        },
        {
            title: "Planned – AI-Powered Event Management Platform",
            description:
                "Developed a full-stack AI-powered platform for corporate event sourcing, contract management, and payments, featuring automated workflows, real-time analytics, and a global vendor network for seamless event execution.",
            image: "Planned-img.jpg",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AI Automation", "PostgreSQL", "AWS"],
            live: "https://planned.com/",
        },

    ],
    stats: [
        { label: "Projects Built", value: 100, suffix: "+" },
        { label: "Years Experience", value: 12, suffix: "+" },
        { label: "GitHub Commits", value: 10000, suffix: "+" },
        { label: "Happy Clients", value: 40, suffix: "+" },
    ],
    timeline: [

        {
            year: "2023 – Present",
            title: "Senior Full-Stack Developer",
            description:
                "At Optimity Logics, leading end-to-end system development across frontend, backend, and cloud. Architecting scalable APIs, integrating AI-driven features, and implementing secure payment workflows while ensuring performance, reliability, and clean engineering standards.",
        },
        {
            year: "2022 – 2023",
            title: "Senior Software Engineer",
            description:
                "At Tecoreng, built and optimized dynamic user interfaces while strengthening backend integrations. Focused on API efficiency, real-time data handling, and improving overall system responsiveness and user experience.",
        },
        {
            year: "2014 – 2022",
            title: "Software Engineer",
            description:
                "At Infibeam, contributed to large-scale platforms by developing core frontend modules, enhancing backend connectivity, and supporting payment gateway integrations with a strong focus on performance and stability.",
        },
    ],

};

export type Portfolio = typeof portfolio;
