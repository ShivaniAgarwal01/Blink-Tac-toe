# Blink Tac Toe 🎮
A creative twist on Tic Tac Toe with emojis and a vanishing rule!

## 🔧 Tech Stack
- React.js
- CSS / Tailwind CSS

## 😎 Emoji Categories
- Animals — 🐶 🐱 🐰 🐵
- Food — 🍕 🍟 🍩 🍔
- Travel - 🚗 ✈️ 🚲 🚀
- Sports - ⚽ 🏀 🏈 🎾

## ✨ Key Features
- 3x3 grid with emoji-based gameplay
- Vanishing emoji logic (FIFO rule)
- Win detection with highlighted combination
- Play Again button
- Responsive UI and turn indicators
- Supports dynamic emoji selection per move

## 🧠 Vanishing Feature Logic
- Each player has a max of 3 emojis on board.
- On 4th move, the oldest emoji vanishes.
- The new emoji **cannot** go on the vanished emoji’s previous position.

## 🛠 Future Improvements
- Sound effects and animations
- Scoreboard for multiple rounds
- Custom emoji category selection

  ## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Emoji-Tic-Tac-toe.git
   cd Emoji-Tic-Tac-toe
```
```

2  **Install dependencies**
  ```bash
    npm install
```

3. **Start the development server**
  ```bash
     npm run dev
  ```
Deploy url: https://blinktactoegame.netlify.app/

