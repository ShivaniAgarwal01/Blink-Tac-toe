// src/components/PlayerInfo.jsx
import React from 'react';
import SelectInput from './SelectInput';

function PlayerInfo({
  player1Name,
  setPlayer1Name,
  player2Name,
  setPlayer2Name,
  player1Category,
  setPlayer1Category,
  player2Category,
  setPlayer2Category,
  emojiCategories
}) {
  return (
    <div className='flex flex-row items-center space-x-25'>
      <div>
        <h2 className='text-[20px] mb-2'>Player 1:</h2>
        <input 
          type="text"
          placeholder='Enter Player 1 Name'
          className='text-lg text-black p-2 rounded-md h-9 w-64 bg-[#d8d8d8] mb-3'
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
        <SelectInput
          label="Select Emoji Category"
          value={player1Category}
          onChange={setPlayer1Category}
          options={emojiCategories}
          disabledOptions={[player2Category]}
        />
      </div>

      <div>
        <h2 className='text-[20px] mb-2'>Player 2:</h2>
        <input 
          type="text"
          placeholder='Enter Player 2 Name'
          className='text-lg text-black p-2 rounded-md h-9 w-64 bg-[#d8d8d8] mb-3'
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
        <SelectInput
          label="Select Emoji Category"
          value={player2Category}
          onChange={setPlayer2Category}
          options={emojiCategories}
          disabledOptions={[player1Category]}
        />
      </div>
    </div>
  );
}

export default PlayerInfo;
