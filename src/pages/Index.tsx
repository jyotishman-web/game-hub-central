import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import GameCard from "@/components/GameCard";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { games, categories } from "@/data/games";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return games.filter((g) => {
      const matchCat = activeCategory === "All" || g.category === activeCategory;
      const matchSearch =
        !search ||
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Game Garage — Play Free HTML5 Games Online"
        description="Play free HTML5 games instantly — no downloads, no installs. Puzzle, action, strategy and casual games."
        canonical="https://gamegaragex.netlify.app/"
      />
      <Hero />

      <div className="container py-8 space-y-6">
        {/* Categories */}
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Game count */}
        <p className="text-center text-xs text-muted-foreground">
          {filtered.length} game{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No games found. Try a different search or category.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
