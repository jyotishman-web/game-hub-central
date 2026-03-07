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
    id: "orbit-rush",
    title: "Orbit Rush",
    category: "Action",
    thumbnail: "/games/orbit-rush/my.png",
    description: "Orbit Rush is a minimalist, high-speed timing game that tests your reflexes and precision.",
    howToPlay: "Tap or Click at the exact moment your orb is aligned with the next circle. If you miss, the game ends.",
    gameFile: "/games/orbit-rush/index.html",
  },
  {
    id: "hextris",
    title: "Hextris",
    category: "Puzzle",
    thumbnail: "/games/hextris/A.png",
    description: "Addictive hexagon puzzle game where you rotate and match colors.",
    howToPlay: "Use arrow keys to rotate the hexagon. Match 3 or more same-colored blocks to clear them.",
    gameFile: "/games/hextris/index.html",
  },
  {
    id: "2048",
    title: "2048",
    category: "Puzzle",
    thumbnail: "/games/2048/2048.png",
    description: "Slide and merge matching numbers to reach the legendary 2048 tile. Simple to learn but challenging to master!",
    howToPlay: "Use arrow keys or swipe on mobile to move tiles. When two tiles with the same number touch, they merge into one. Reach 2048 to win.",
    gameFile: "/games/2048/index.html",
  },
  {
    id: "Othello",
    title: "Othello",
    category: "Strategy",
    thumbnail: "/games/hextris/1.png",
    description: "Classic board game of strategy. Place discs to outflank and capture your opponent's pieces.",
    howToPlay: "Click to place your disc. Outflank opponent pieces in any direction to flip them to your color. The player with the most discs wins.",
    gameFile: "/games/Othello/index.html",
  },
  {
    id: "number-guesser",
    title: "Number Guesser",
    category: "Casual",
    thumbnail: "/games/number-guesser/thumb (1).png",
    description: "Guess the secret number between 1 and 100. Use clues to narrow it down!",
    howToPlay: "Enter a number and get hints whether it's too high or too low. Try to guess in as few attempts as possible.",
    gameFile: "/games/number-guesser/index.html",
  },
  {
    id: "minesweeper",
    title: "Minesweeper",
    category: "Puzzle",
    thumbnail: "/games/minesweeper/e.png",
    description: "Clear the minefield without detonating any bombs. Use logic and deduction to reveal safe cells.",
    howToPlay: "Click to reveal a cell. Right-click or long-press to flag a mine. Numbers show how many mines are adjacent.",
    gameFile: "/games/minesweeper/index.html",
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    category: "Action",
    thumbnail: "/games/flappy-bird/l.png",
    description: "Tap to flap through an endless series of pipes. Simple but insanely addictive!",
    howToPlay: "Tap the screen or press Space to flap. Navigate through the gaps between pipes. One hit and it's game over!",
    gameFile: "/games/flappy-bird/index.html",
  },
  {
    id: "whack-a-mole",
    title: "Whack-a-Mole",
    category: "Action",
    thumbnail: "/games/whack-a-mole/thumb.png",
    description: "Whack the moles as they pop up! Test your reflexes in this 30-second challenge.",
    howToPlay: "Click or tap the moles as they appear. The faster you go, the faster they pop up. Score as many as you can in 30 seconds!",
    gameFile: "/games/whack-a-mole/index.html",
  },
];

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();
