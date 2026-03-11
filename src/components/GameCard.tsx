import { motion } from "framer-motion";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

const GameCard = ({ game, index, onClick }: GameCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.2) }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group text-left bg-card rounded-lg border border-border overflow-hidden transition-shadow duration-300 card-glow focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    <div className="aspect-video bg-muted relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-muted">
        <span className="text-3xl font-bold font-display text-muted-foreground/30">
          {game.title.charAt(0)}
        </span>
      </div>
      <img
        src={game.thumbnail}
        alt={game.title}
        loading="eager"
        decoding="async"
        className="relative z-10 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
    <div className="p-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-semibold text-sm text-foreground truncate">
          {game.title}
        </h3>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0 ml-2">
          {game.category}
        </span>
      </div>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {game.description}
      </p>
    </div>
  </motion.button>
);

export default GameCard;
