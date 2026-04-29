// IntroVideo.jsx

export default function IntroVideo() {
    return (
        <section id="Introduction" className="py-20 px-6 bg-[var(--bg)]">
            <div className="max-w-3xl mx-auto">

                {/* Top content */}
                <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            Introduction
          </span>
                    <h2 className="mt-2 mb-4 text-4xl font-bold text-[var(--text)] leading-tight">
                        Hi, I’m Dipal
                    </h2>
                    <p className="text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
                        Here’s a quick look at my journey and the work I love doing.
                    </p>

                </div>

                {/* Video */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-sm">
                    <video
                        src="/videos/intro.mp4"
                        poster="video-thumbnail.jpeg"
                        controls
                        preload="metadata"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
        </section>
    )
}