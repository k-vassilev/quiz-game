import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
//Importing the action
import {startGame} from '../store/slices/gameInit';

const StartGamePage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const startGameHandler = () => {
    //Dispatches the action startGame with payload - username taken from input
      dispatch(startGame({username}))
  }
  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)}
      placeholder="Username"
      />
      <button onClick={startGameHandler}>Start Game</button>
     </div>
  )
}

export default StartGamePage