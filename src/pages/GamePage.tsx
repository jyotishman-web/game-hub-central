import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Info, Gamepad, X, Share2 } from "lucide-react";
import { games } from "@/data/games";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const BASE_URL = "https://gamegaragex.netlify.app";

const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [playing, setPlaying] = useState(false);

  const game = useMemo(
    () => games.find((g) => g.id.toLowerCase() === gameId?.toLowerCase()),
    [gameId]
  );

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-display text-foreground">Game Not Found</h1>
          <p className="text-muted-foreground">The game you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const canonical = `${BASE_URL}/games/${game.id}`;
  const pageTitle = `${game.title} - Play Free Online | Game Garage`;
  const pageDesc = `${game.description} Play ${game.title} for free online — no downloads needed.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    genre: game.category,
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: canonical,
    image: `${BASE_URL}${game.thumbnail}`,
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: game.title, url: canonical });
    } else {
      await navigator.clipboard.writeText(canonical);
    }
  };

  if (playing) {
    return (
      <>
        <SEOHead title={pageTitle} description={pageDesc} canonical={canonical} ogImage={`${BASE_URL}${game.thumbnail}`} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[60] bg-black flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
            <h2 className="text-sm font-semibold font-display text-foreground truncate">{game.title}</h2>
            <button
              onClick={() => setPlaying(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive/20 transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Exit
            </button>
          </div>
          <iframe src={game.gameFile} title={game.title} className="flex-1 w-full border-none" allow="fullscreen; autoplay; gamepad" />
        </motion.div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={pageTitle} description={pageDesc} canonical={canonical} ogImage={`${BASE_URL}${game.thumbnail}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav bar */}
      <nav className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-30">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Games
          </Link>
          <button onClick={handleShare} className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main className="container py-8 max-w-3xl mx-auto">
        <article className="space-y-6">
          {/* Thumbnail */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="aspect-video rounded-xl overflow-hidden border border-border bg-muted relative">
            <img
              src={game.thumbnail}
              alt={`${game.title} gameplay screenshot`}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-6xl font-bold font-display text-muted-foreground/20 -z-10">{game.title.charAt(0)}</span>
            </div>
          </motion.div>

          {/* Title + Category */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground">{game.title}</h1>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{game.category}</span>
            </div>
          </motion.div>

          {/* Play Button */}
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            onClick={() => setPlaying(true)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all hover:opacity-90 glow-primary touch-manipulation"
          >
            <Play className="w-5 h-5" /> Play Now
          </motion.button>

          {/* Info sections */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            <section className="bg-card border border-border rounded-lg p-5">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-1">About this game</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-5">
              <div className="flex gap-3">
                <Gamepad className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-1">How to Play</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{game.howToPlay}</p>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Related games */}
          <section className="pt-4">
            <h2 className="text-lg font-semibold font-display text-foreground mb-4">More Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {games
                .filter((g) => g.id !== game.id)
                .slice(0, 6)
                .map((g) => (
                  <Link
                    key={g.id}
                    to={`/games/${g.id}`}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={g.thumbnail}
                        alt={g.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs font-semibold text-foreground truncate">{g.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default GamePage;
