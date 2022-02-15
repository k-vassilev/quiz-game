import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../store/slices/gameInit';
import Button from '../components/Button';

const EndGamePage = () => {
const dispatch = useDispatch();
const answers = useSelector((state) => state.quiz.answers)
const score = useSelector((state) => state.quiz.score)
const restartHandler = () => {
  dispatch(restartGame())
}

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-orange-500 my-4">Game Over</h1>
      <p className="text-2xl mb-4">Your score is: <span className="text-orange-800">{score}</span>/10</p>
      <Button onClick={restartHandler}>Restart Game</Button>
        <div className="mt-4 p-4">
      {answers.map((answer, index) => (
        <div key={index} className="border-b-2 border-orange-500 flex justify-between">
          <p dangerouslySetInnerHTML={{__html:answer.question}}
          className="p-2 mr-2"></p>
          <span className={`p-2 ${answer.correctAnswer === answer.answer ? 'text-green-500' : 'text-red-500'}`}>{answer.answer}</span>
          </div>
      ))}
      </div>

    </div>
  )
}

export default EndGamePage