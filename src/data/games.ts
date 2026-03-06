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
    howToPlay: "Tap or Click at the exact moment your orb is aligned with the next circle. If you miss, the game ends.",
    gameFile: "/games/orbit-rush/index.html",
  },
  {
    id: "hextris",
    title: "Hextris",
    category: "Puzzle",
    thumbnail: "/games/hextris/A.png",
    description: "Addictive hexagon puzzle game.",
    howToPlay: "Use arrow keys to rotate the hexagon.",
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
    thumbnail: "/games/HexGL/icon_128.png",
    description: "A futuristic racing game built with HTML5 and WebGL. Speed through a neon-lit track at breakneck pace!",
    howToPlay: "Use arrow keys or WASD to steer your ship. Avoid walls to preserve your shield. Hit boost pads for extra speed.",
    gameFile: "games/Othello/index.html",
  },
  {
    id: "number-guesser",
    title: "Number Guesser",
    category: "Education",
    thumbnail: "/games/number-guesser/thumb (1).png",
    description: "Solve math challenges and test your math skills!",
    howToPlay: "Type your answer before time runs out to keep your streak.",
    gameFile: "/games/number-guesser/index.html",
  },
  {
    id: "snake",
    title: "Snake",
    category: "Action",
    thumbnail: "/games/snake/thumb.png",
    description: "Guide the snake to eat food and grow longer without hitting the walls or yourself. A timeless classic!",
    howToPlay: "Use arrow keys or swipe to change direction. Eat the red food to grow. Don't crash into walls or your own tail!",
    gameFile: "/games/snake/index.html",
  },
  {
    id: "breakout",
    title: "Breakout",
    category: "Action",
    thumbnail: "/games/breakout/thumb.png",
    description: "Smash colorful bricks with a bouncing ball in this classic arcade game. Don't let the ball fall!",
    howToPlay: "Move mouse or touch to control the paddle. Bounce the ball to break all the bricks. You have 3 lives.",
    gameFile: "/games/breakout/index.html",
  },
  {
    id: "minesweeper",
    title: "Minesweeper",
    category: "Puzzle",
    thumbnail: "/games/minesweeper/thumb.png",
    description: "Clear the minefield without detonating any bombs. Use logic and deduction to reveal safe cells.",
    howToPlay: "Click to reveal a cell. Right-click or long-press to flag a mine. Numbers show how many mines are adjacent.",
    gameFile: "/games/minesweeper/index.html",
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    category: "Casual",
    thumbnail: "/games/flappy-bird/thumb.png",
    description: "Tap to flap through an endless series of pipes. Simple but insanely addictive!",
    howToPlay: "Tap the screen or press Space to flap. Navigate through the gaps between pipes. One hit and it's game over!",
    gameFile: "/games/flappy-bird/index.html",
  },
  {
    id: "whack-a-mole",
    title: "Whack-a-Mole",
    category: "Casual",
    thumbnail: "/games/whack-a-mole/thumb.png",
    description: "Whack the moles as they pop up! Test your reflexes in this 30-second challenge.",
    howToPlay: "Click or tap the moles as they appear. The faster you go, the faster they pop up. Score as many as you can in 30 seconds!",
    gameFile: "/games/whack-a-mole/index.html",
  },
];

export const categories = Array.from(new Set(games.map((g) => g.category))).sort();
