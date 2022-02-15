import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartGame } from '../store/slices/gameInit';

const EndGamePage = () => {
const dispatch = useDispatch();
const answers = useSelector((state) => state.quiz.answers)
const score = useSelector((state) => state.quiz.score)
const restartHandler = () => {
  dispatch(restartGame())
}

  return (
    <div>
      <p>Your score is: {score}/10</p>
      <button onClick={restartHandler}>Restart Game</button>
        
      {answers.map(answer => (
        <div>
          <p dangerouslySetInnerHTML={{__html:answer.question}}></p>
          {answer.answer} - {answer.correctAnswer}
          </div>
      ))}

    </div>
  )
}

export default EndGamePage