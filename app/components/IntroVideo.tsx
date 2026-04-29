export default function IntroVideo() {
    return (
        <section id="Introduction" className="py-24 bg-[var(--bg)]">

            {/* ✅ SAME WIDTH AS SKILLS */}
            <div className="mx-auto w-full max-w-[1232px] px-6 md:px-8">

                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                        Introduction
                    </span>

                    <h2 className="mt-3 mb-4 text-4xl font-bold">
                        Hi, I’m Dipal
                    </h2>

                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        Here’s a quick look at my journey and the work I love doing.
                    </p>
                </div>

                {/* ✅ BIGGER VIDEO */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
                    <video src="/videos/intro.mp4" poster="video-thumbnail.jpeg" controls preload="metadata" className="w-full h-full object-contain" />
                </div>

            </div>
        </section>
    )
}