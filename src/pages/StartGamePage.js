import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
//Importing the action
import {startGame} from '../store/slices/gameInit';
import Button from '../components/Button';

const StartGamePage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const startGameHandler = () => {
    //Dispatches the action startGame with payload - username taken from input
      dispatch(startGame({username}))
  }
  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <input value={username} onChange={e => setUsername(e.target.value)}
      placeholder="Username"
      className="py-2 px-4 outline-none rouded shadow w-64 mb-6"
      />
      <Button onClick={startGameHandler}> Start Game</Button>
     </div>
  )
}

export default StartGamePage