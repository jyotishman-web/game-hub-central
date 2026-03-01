export interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  howToPlay: string;
  gameFile: string; // path to HTML file in public/games/<id>/index.html
}

// ====================================================================
// ADDING A NEW GAME:
// 1. Create a folder: public/games/<game-id>/
// 2. Place your HTML game file(s) in that folder (index.html as entry)
// 3. Add an entry to the array below
// 4. Add a thumbnail image to public/games/<game-id>/thumb.png
// ====================================================================

export const games: Game[] = [
  {
    id: "space-shooter",
    title: "Space Shooter",
    category: "Action",
    thumbnail: "/games/space-shooter/thumb.png",
    description: "Blast through waves of alien invaders in this classic space shooter. Collect power-ups and survive as long as you can!",
    howToPlay: "Use arrow keys or WASD to move your ship. Press Space to shoot. Collect power-ups for special abilities.",
    gameFile: "/games/space-shooter/index.html",
  },
  {
    id: "orbit-rush",
    title: "Orbit Rush",
    category: "Puzzle",
    thumbnail: "/games/orbit-rush/my.png",
    description: "Orbit Rush is a minimalist, high-speed timing game that tests your reflexes and precision.",
    howToPlay: "​The Goal: Move your glowing orb from one circle to the next to climb higher and score points.​The Control: Tap or Click at the exact moment your orb is aligned with the next circle.​The Challenge: A cyan tether will shoot out; if you miss the target or mistime the jump, your orb flies into the void and the game ends..",
    gameFile: "/games/orbit-rush/index.html",
  },
  {
    id: "racing-fury",
    title: "Racing Fury",
    category: "Racing",
    thumbnail: "/games/racing-fury/thumb.png",
    description: "Hit the track and race against AI opponents through stunning environments.",
    howToPlay: "Use arrow keys to steer. Up to accelerate, Down to brake. Avoid obstacles and stay on the road.",
    gameFile: "/games/racing-fury/index.html",
  },
  {
    id: "word-wizard",
    title: "Word Wizard",
    category: "Puzzle",
    thumbnail: "/games/word-wizard/thumb.png",
    description: "Unscramble letters to form words before time runs out. Test your vocabulary!",
    howToPlay: "Click or type letters to form words. Submit with Enter. Longer words score more points.",
    gameFile: "/games/word-wizard/index.html",
  },
  {
    id: "tower-defense",
    title: "Tower Defense",
    category: "Strategy",
    thumbnail: "/games/tower-defense/thumb.png",
    description: "Build and upgrade towers to defend against waves of enemies. Plan your strategy wisely!",
    howToPlay: "Click to place towers along the path. Upgrade towers by clicking them. Earn gold by defeating enemies.",
    gameFile: "/games/tower-defense/index.html",
  },
  {
    id: "ninja-run",
    title: "Ninja Run",
    category: "Action",
    thumbnail: "/games/ninja-run/thumb.png",
    description: "Run, jump, and slash through obstacles in this fast-paced endless runner.",
    howToPlay: "Tap or press Space to jump. Double-tap for double jump. Swipe down or press Down to slide.",
    gameFile: "/games/ninja-run/index.html",
  },
  {
    id: "card-match",
    title: "Card Match",
    category: "Casual",
    thumbnail: "/games/card-match/thumb.png",
    description: "Flip cards and find matching pairs. Train your memory with increasing difficulty!",
    howToPlay: "Click cards to flip them. Match two identical cards to remove them. Complete the board to win.",
    gameFile: "/games/card-match/index.html",
  },
  {
    id: "chess-master",
    title: "Chess Master",
    category: "Strategy",
    thumbnail: "/games/chess-master/thumb.png",
    description: "Challenge the AI in a classic game of chess. Multiple difficulty levels available.",
    howToPlay: "Click a piece to select it, then click a valid square to move. Checkmate the opponent's king to win.",
    gameFile: "/games/chess-master/index.html",
  },
  {
    id: "bubble-pop",
    title: "Bubble Pop",
    category: "Casual",
    thumbnail: "/games/bubble-pop/thumb.png",
    description: "Match and pop colorful bubbles to clear the board. Chain combos for bonus points!",
    howToPlay: "Aim and shoot bubbles to match 3 or more of the same color. Clear all bubbles to advance.",
    gameFile: "/games/bubble-pop/index.html",
  },
  {
    id: "drift-king",
    title: "Drift King",
    category: "Racing",
    thumbnail: "/games/drift-king/thumb.png",
    description: "Master the art of drifting through tight corners and earn style points.",
    howToPlay: "Hold Space while turning to drift. Chain drifts for combo multipliers. Don't hit the walls!",
    gameFile: "/games/drift-king/index.html",
  },
  {
    id: "zombie-survival",
    title: "Zombie Survival",
    category: "Action",
    thumbnail: "/games/zombie-survival/thumb.png",
    description: "Survive waves of zombies using weapons and barricades. How long can you last?",
    howToPlay: "WASD to move, mouse to aim and shoot. R to reload. Collect supplies between waves.",
    gameFile: "/games/zombie-survival/index.html",
  },
  {
    id: "number-guesser",
    title: "Number Guesser",
    category: "Education",
    thumbnail: "/games/number-guesser/thumb (1).png",
    description: "Solve math math skills!",
    howToPlay: "Type  before time runs out to keep your streak.",
    gameFile: "/games/number-guesser/index.html",
  },
];

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();
