import React from 'react'
import { cancelGame } from '../store/slices/gameInit'
import { useDispatch } from 'react-redux'

const FetchingPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(cancelGame())}}>Cancel</button>
      <p>Loading</p>
      </div>
  )
}

export default FetchingPage