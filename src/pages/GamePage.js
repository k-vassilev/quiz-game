import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { answerQuestion } from '../store/slices/game';
import { finishGame } from '../store/slices/gameInit';
import Button from '../components/Button';

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
    <>
    <div className="flex flex-col items-center relative">
      <p className="h-20 w-20 flex justify-center items-center border-8 border-orange-500 rounded-full my-4 
      text-3xl text-orange-500">{timeLeft}</p>
      <p className="absolute top-4 left-4 text-2xl text-orange-500">Score: {score}</p>
      <p className="absolute top-4 right-4 text-2xl text-orange-500">Questions: {currentQuestionIndex}/10</p>
      <p dangerouslySetInnerHTML={{__html:currentQuestion}}
      className="p-7 bg-white rounded shadow"></p>
      <div className="flex justify-between w-96 mt-8">
      <Button onClick={()=>answerHandler('True')}>True</Button>
      <Button onClick={()=>answerHandler('False')}>False</Button>
      </div>
    </div>
    <div className="absolute bottom-4 right-4">
    <Button onClick={endGameHandler} addClassNames="bg-red-500">Quit Game</Button>
    </div>
     </>
  )
}

export default GamePage