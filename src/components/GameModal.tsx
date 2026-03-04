import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Info, Gamepad, Maximize2, Minimize2 } from "lucide-react";
import type { Game } from "@/data/games";

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

const GameModal = ({ game, onClose }: GameModalProps) => {
  const [playing, setPlaying] = useState(false);

  const handleClose = () => {
    setPlaying(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {game && (
        <>
          {/* Fullscreen game iframe */}
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                <h2 className="text-sm font-semibold font-display text-foreground truncate">
                  {game.title}
                </h2>
                <button
                  onClick={handleClose}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Exit
                </button>
              </div>
              <iframe
                src={game.gameFile}
                title={game.title}
                className="flex-1 w-full border-none"
                allow="fullscreen; autoplay; gamepad"
              />
            </motion.div>
          )}

          {/* Info modal */}
          {!playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="text-6xl font-bold font-display text-muted-foreground/20">
                      {game.title.charAt(0)}
                    </span>
                  </div>
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="relative z-10 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-background/70 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold font-display text-foreground">
                        {game.title}
                      </h2>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {game.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{game.description}</p>
                  </div>

                  <div className="flex gap-2">
                    <Gamepad className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">How to Play</h3>
                      <p className="text-sm text-muted-foreground">{game.howToPlay}</p>
                    </div>
                  </div>

                  {/* Play Button - now launches inline */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 glow-primary"
                  >
                    <Play className="w-4 h-4" />
                    Play Now
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default GameModal;
