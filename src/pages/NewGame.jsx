import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/global.scss';
import '../style/newGame.scss';

function NewGame() {
  const navigate = useNavigate();
  return (
    <div className='pageContainer'>
      <div className='contentContainer'>
        <h1>Hanging Game</h1>
        <button onClick={() => navigate('/game')}>Jogar</button>
      </div>
    </div>
  );
}

export default NewGame;
