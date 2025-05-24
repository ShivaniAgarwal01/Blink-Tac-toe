import React, { useState ,useEffect } from 'react';

function GameBoard({ player1Category, player2Category, options }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [player1Emojis, setPlayer1Emojis] = useState([]);
  const [player2Emojis, setPlayer2Emojis] = useState([]);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const currentPlayer = turn % 2 === 0 ? 'player1' : 'player2';
  const currentCategory = currentPlayer === 'player1' ? player1Category : player2Category;
  const emojiOptions = options[currentCategory] || [];
  const usedEmojis = currentPlayer === 'player1' ? player1Emojis : player2Emojis;
  const availableEmojis = emojiOptions.filter(emoji => !usedEmojis.includes(emoji));

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const checkWinner = (moves) => {
    for (let combo of winningCombos) {
      if (combo.every(index => moves.includes(index))) {
        setWinningLine(combo);
        return true;
      }
    }
    return false;
  };

    useEffect(() => {
  if (winner) {
    alert(`${winner} wins the game!`);
  }
}, [winner]);



  const handleClick = (index) => {
    if (board[index] || winner || !selectedEmoji) return;

    const newBoard = [...board];
    newBoard[index] = selectedEmoji;

    if (currentPlayer === 'player1') {
      let newMoves = [...player1Moves, index];
      let newEmojis = [...player1Emojis, selectedEmoji];

      if (newMoves.length > 3) {
        const removedIndex = newMoves.shift();
        const removedEmoji = newBoard[removedIndex];
        newEmojis = newEmojis.slice(1);
        newBoard[removedIndex] = null;
      }

      setPlayer1Moves(newMoves);
      setPlayer1Emojis(newEmojis);
      if (checkWinner(newMoves)) setWinner('Player 1');
    } else {
      let newMoves = [...player2Moves, index];
      let newEmojis = [...player2Emojis, selectedEmoji];

      if (newMoves.length > 3) {
        const removedIndex = newMoves.shift();
        const removedEmoji = newBoard[removedIndex];
        newEmojis = newEmojis.slice(1);
        newBoard[removedIndex] = null;
      }

      setPlayer2Moves(newMoves);
      setPlayer2Emojis(newEmojis);
      if (checkWinner(newMoves)) setWinner('Player 2');
    }

    setBoard(newBoard);
    setSelectedEmoji('');
    setTurn(turn + 1);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setTurn(0);
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setPlayer1Emojis([]);
    setPlayer2Emojis([]);
    setWinner(null);
    setWinningLine([]);
    setSelectedEmoji('');
  };

 const getLineStyle = () => {
  // Size of each cell + gap between cells
  const cellSize = 64;
  const gap = 8;

  // Calculate total width including gaps
  const totalCellSize = cellSize + gap;

  const combo = winningLine.slice().sort((a, b) => a - b).toString();

  switch (combo) {
    case "0,1,2": // top row, horizontal
      return {
        top: cellSize/1.5 + "px",
        left: "8px",
        width: totalCellSize * 3.5 - gap + "px",
        height: "5px",
        transform: "none",
      };
    case "3,4,5": // middle row, horizontal
      return {
        top: totalCellSize + cellSize  + "px",
        left: "8px",
        width: totalCellSize * 3.5 - gap + "px",
        height: "5px",
        transform: "none",
      };
    case "6,7,8": // bottom row, horizontal
      return {
        top: 2 * totalCellSize + cellSize +21 + "px",
        left: "8px",
        width: totalCellSize * 3.5 - gap + "px",
        height: "5px",
        transform: "none",
      };
    case "0,3,6": // left column, vertical
      return {
        top: "15px",
        left: cellSize /1.75 +"px",
        width: "5px",
        height: totalCellSize *3.5- gap + "px",
        transform: "none",
      };
    case "1,4,7": // middle column, vertical
      return {
        top: "15px",
        left: totalCellSize + cellSize /1 - 8 + "px",
        width: "5px",
        height: totalCellSize * 3.5 - gap + "px",
        transform: "none",
      };
    case "2,5,8": // right column, vertical
      return {
        top: "15px",
        left: 2 * totalCellSize + cellSize + 7 + "px",
        width: "5px",
        height: totalCellSize * 3.5 - gap + "px",
        transform: "none",
      };
    case "0,4,8": // diagonal left-top to right-bottom
      return {
        top: "4px",
        left: "8px",
        width: Math.sqrt(24* totalCellSize * totalCellSize) + "px",
        height: "5px",
        transform: "rotate(47deg)",
        transformOrigin: "left top",
      };
    case "2,4,6": // diagonal right-top to left-bottom
      return {
        top: "6px",
        right: "2px",
        width: Math.sqrt(24 * totalCellSize * totalCellSize) + "px",
        height: "5px",
        transform: "rotate(-47deg)",
        transformOrigin: "right top",
        position: "absolute",
      };
    default:
      return {};
  }
};


  return (
    <div className="flex flex-col items-center mt-8 space-y-6 mt-10">
      {!winner && (
        <div className="text-[#d8d8d8] font-mono text-lg flex flex-col items-center">
          <p className="mb-2 text-[25px]" >🎮 <strong>{currentPlayer === 'player1' ? 'Player 1' : 'Player 2'}</strong>'s Turn</p>
          <select
            value={selectedEmoji}
            onChange={(e) => setSelectedEmoji(e.target.value)}
            className="p-2 rounded-md text-black bg-[#d8d8d8]"
          >
            <option value="">Choose Emoji</option>
            {availableEmojis.map((emoji, idx) => (
              <option key={idx} value={emoji}>{emoji}</option>
            ))}
          </select>
        </div>
      )}

      <div className="relative mt-4">
        <div className="grid grid-cols-3 gap-4 w-[250px] relative z-15">
          {board.map((cell, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className="w-20 h-20 bg-white text-black flex items-center justify-center text-2xl border cursor-pointer rounded-md"
            >
              {cell}
            </div>
          ))}
        </div>

        {winningLine.length > 0 && (
  <div
    style={{
      position: "absolute",
      backgroundColor: "black",
      borderRadius: "2px",
      transition: "all 0.3s ease-in-out",
      zIndex: 100,
      ...getLineStyle(),
    }}
  ></div>
)}

      </div>

      {winner && (
        <div className="flex flex-col items-center text-green-400 text-2xl font-bold text-cente mt-5">
          <p>🎉 {winner} Wins!</p>  
          <button
            className="mt-5 px-4 py-2 bg-[#d8d8d8] rounded-md text-black"
            onClick={handleRestart}
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
}

export default GameBoard;
