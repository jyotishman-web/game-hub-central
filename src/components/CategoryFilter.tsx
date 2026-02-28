import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

const CategoryFilter = ({ categories, active, onSelect }: CategoryFilterProps) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {["All", ...categories].map((cat, i) => (
      <motion.button
        key={cat}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        onClick={() => onSelect(cat)}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
          active === cat
            ? "bg-primary text-primary-foreground border-primary glow-active"
            : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
        )}
      >
        {cat}
      </motion.button>
    ))}
  </div>
);

export default CategoryFilter;
