import React, { useState } from 'react';
import PlayerInfo from './components/PlayerInfo.jsx';
import GameBoard from './components/GameBoard.jsx';
import emojiCategories from './data/emojiCategories';

function App() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');

  return (
    <div className='flex flex-col items-center h-screen space-y-3 p-5'>
      <h1 className='text-[45px] font-[monospace] font-semibold text-[#d8d8d8]'>TIC TAC TOE</h1>  
      
      <p className="text-lg text-[#d8d8d8] font-[monospace] mt-2 flex flex-col items-center mb-7">
        Not your usual Tic Tac Toe — emojis vanish, strategies evolve.
        <span>Are you ready to play?</span>
      </p> 

      <PlayerInfo 
        player1Name={player1Name}
        setPlayer1Name={setPlayer1Name}
        player2Name={player2Name}
        setPlayer2Name={setPlayer2Name}
        player1Category={player1Category}
        setPlayer1Category={setPlayer1Category}
        player2Category={player2Category}
        setPlayer2Category={setPlayer2Category}
        emojiCategories={emojiCategories}
      />

      {player1Name && player2Name && player1Category && player2Category && (
        <GameBoard
          player1Category={player1Category}
          player2Category={player2Category}
          options={emojiCategories}
        />
      )}
    </div>
  );
}

export default App;
