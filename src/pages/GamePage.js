import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { answerQuestion } from '../store/slices/game';
import { finishGame } from '../store/slices/gameInit';

const GamePage = () => {
  const dispatch = useDispatch();
  // Time interval state
  const [timeLeft, setTimeLeft] = useState(60);

  //getting the current question by using the currentquestionindex which changes each time the quesiton changes
  //questions come in html form so we set them using "dangerouslySetInnerHTML" to change the innerHTML of the element
  const currentQuestion = useSelector(state => state.quiz.questions[state.quiz.currentQuestionIndex]).question;
  const score = useSelector((state)=> state.quiz.score);
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex)

  // Handler dispatches the answerQuestion reducer from the slice.
  const answerHandler = (answer) => {
    dispatch(answerQuestion({answer}))
  }

  const endGameHandler = () => {
    dispatch(finishGame())
  }

  // Changing time left using the previous state and subtracting 1 from in each 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => prev-1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <p>Time left: {timeLeft}</p>
      <p>Score: {score}</p>
      <p>{currentQuestionIndex}/10</p>
      <p dangerouslySetInnerHTML={{__html:currentQuestion}}></p>
      <button onClick={()=>answerHandler('True')}>True</button>
      <button onClick={()=>answerHandler('False')}>False</button>
      <button onClick={endGameHandler}>Quit Game</button>

    </div>
  )
}

export default GamePage