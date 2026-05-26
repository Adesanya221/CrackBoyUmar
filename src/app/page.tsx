"use client";

import ArtworkGallery from "./components/ArtworkGallery";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
          <a href="#news" className="text-muted hover:text-foreground transition-colors">News</a>
          <a href="#about" className="text-muted hover:text-foreground transition-colors">About</a>
          <a href="#artwork" className="text-muted hover:text-foreground transition-colors">Artwork</a>
          <a href="#socials" className="text-muted hover:text-foreground transition-colors">Socials</a>
          <a href="#music" className="text-muted hover:text-foreground transition-colors">Music</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-[100svh] px-4 sm:px-6 text-center overflow-hidden">
        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25 dark:opacity-15 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 max-w-2xl w-full">
          <div
            className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl shadow-purple-500/25 ring-4 ring-purple-500/30"
          >
            <img src="/hero.jpg" alt="CrackboyUmar" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wide text-foreground/80 uppercase">
            CrackboyUmar
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent -mt-3"
          >
            CrackboyUmar
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted max-w-lg"
          >
            Artist &bull; Songwriter &bull; Performer
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto"
          >
            <a
              href="#music"
              className="px-6 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Listen Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-card-border rounded-full hover:bg-card transition-colors text-center"
            >
              About
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          About
        </h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed font-[var(--font-geist-sans)]">
          His songs are just at the intersection of reality and abstraction.
          Crackboy Umar, from the +234 region, is interested in creating space
          and distance with his music that feels like the familiar world around us
          but it&apos;s ambiguous, general and abstracted.
        </p>
        <div className="flex items-center gap-3 mt-6 text-sm text-muted">
          <span className="font-semibold text-foreground">Lagos, NG</span>
        </div>
      </section>

      {/* Artwork Section */}
      <section id="artwork" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Artwork
        </h2>
        <p className="text-muted text-sm sm:text-base mb-6 sm:mb-8">
          Tap on a piece to see the inspiration behind it.
        </p>
        <ArtworkGallery />
      </section>

      {/* Socials Section */}
      <section id="socials" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Connect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <SocialCard
            platform="Spotify"
            url="https://open.spotify.com/artist/0G4vop6K0cReBDwUDP9yjK"
            color="from-green-500 to-green-700"
          />
          <SocialCard
            platform="Instagram"
            url="https://instagram.com/crackboyumar"
            color="from-pink-500 to-purple-600"
          />
          <SocialCard
            platform="Twitter / X"
            url="https://twitter.com/crackboyumar"
            color="from-gray-600 to-gray-800"
          />
          <SocialCard
            platform="TikTok"
            url="https://tiktok.com/@crackboyumar"
            color="from-cyan-400 to-pink-500"
          />
          <SocialCard
            platform="YouTube"
            url="https://youtube.com/@crackboyumar"
            color="from-red-500 to-red-700"
          />
          <SocialCard
            platform="Apple Music"
            url="https://music.apple.com/artist/crackboyumar"
            color="from-pink-400 to-red-500"
          />
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Music
        </h2>
        <div className="rounded-2xl overflow-hidden bg-card border border-card-border p-3 sm:p-4">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/0G4vop6K0cReBDwUDP9yjK?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          News
        </h2>
        <p className="text-muted text-sm mb-6 sm:mb-8 vhs-timestamp">&#9654; BROADCAST FEED</p>
        <div className="flex flex-col gap-5">
          <NewsCard
            date="MAY 2025"
            title="New Music Coming Soon"
            description="CrackboyUmar is cooking something special in the studio. Stay tuned for the next drop."
            tag="Upcoming"
          />
          <NewsCard
            date="APR 2025"
            title="Building the Movement"
            description="New visuals, new energy. The CrackboyUmar wave is just getting started."
            tag="Update"
          />
          <NewsCard
            date="MAR 2025"
            title="PLAY is Out Now"
            description="The debut single 'PLAY' with Forly P is officially out. Stream it everywhere."
            tag="Release"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-card-border mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} CrackboyUmar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function NewsCard({
  date,
  title,
  description,
  tag,
}: {
  date: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="vhs-card w-full p-5 sm:p-6 rounded-xl bg-card border border-card-border hover:border-purple-500/30 transition-colors group cursor-default">
      <div className="vhs-scanline" />
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 uppercase tracking-wider border border-purple-500/20">
            {tag}
          </span>
          <span className="text-[10px] text-muted vhs-timestamp">{date}</span>
          <span className="ml-auto text-[10px] text-red-400/80 font-mono animate-pulse">&#9679; LIVE</span>
        </div>
        <h3 className="glitch-text text-lg sm:text-xl font-bold mt-1 tracking-tight">{title}</h3>
        <p className="text-sm sm:text-base text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  Spotify: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  ),
  "Twitter / X": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  "Apple Music": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.197C19.004.078 18.298.03 17.59.009 17.407.003 17.222 0 17.04 0H6.96c-.183 0-.366.003-.55.009C5.703.03 4.996.078 4.3.197a5.022 5.022 0 00-1.875.694C1.307 1.624.562 2.624.245 3.934a9.23 9.23 0 00-.24 2.19C.003 6.304 0 6.484 0 6.664v10.672c0 .18.003.36.006.54.015.91.09 1.594.24 2.19.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.875.694c.696.12 1.402.167 2.11.188.183.006.366.009.55.009h10.08c.183 0 .366-.003.55-.009.707-.02 1.413-.068 2.11-.188a5.022 5.022 0 001.874-.694c1.118-.733 1.863-1.733 2.18-3.043.15-.596.225-1.28.24-2.19.003-.18.006-.36.006-.54V6.664c0-.18-.003-.36-.006-.54zM17.34 12.03v4.17c0 .45-.1.86-.34 1.23a2.63 2.63 0 01-.93.87c-.39.23-.84.37-1.33.42-.12.02-.25.03-.37.03-.73 0-1.35-.27-1.83-.73-.49-.47-.74-1.06-.74-1.76 0-.71.25-1.3.74-1.77.49-.47 1.1-.71 1.83-.71.34 0 .66.06.95.18.3.12.55.29.76.5V9.56l-5.37 1.15v5.59c0 .45-.1.86-.34 1.23-.23.37-.55.66-.93.87-.39.23-.84.37-1.33.42-.12.02-.25.03-.37.03-.73 0-1.35-.27-1.83-.73-.49-.47-.74-1.06-.74-1.76 0-.71.25-1.3.74-1.77.49-.47 1.1-.71 1.83-.71.34 0 .66.06.95.18.3.12.55.29.76.5V7.65c0-.35.09-.65.28-.9.19-.26.44-.43.76-.52l5.96-1.52c.12-.03.24-.05.36-.05.28 0 .53.1.73.3.2.2.3.45.3.73v6.34z"/></svg>
  ),
};

function SocialCard({
  platform,
  url,
  color,
}: {
  platform: string;
  url: string;
  color: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl border border-card-border p-5 sm:p-6 hover:border-foreground/20 transition-all hover:scale-[1.02] block"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`}
      />
      <div className="relative z-10 flex items-center gap-4">
        <div className="text-muted group-hover:text-foreground transition-colors shrink-0">
          {socialIcons[platform]}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{platform}</h3>
          <p className="text-xs sm:text-sm text-muted mt-0.5">Follow on {platform}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 text-muted group-hover:text-foreground transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </a>
  );
}
