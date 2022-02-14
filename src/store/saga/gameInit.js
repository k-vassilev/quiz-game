import { take, fork, put, call } from 'redux-saga/effects';
import {startGame} from '../slices/gameInit';
import {fetchQuizFromApi} from '../../utils/api'


function* fetchQuestionsSaga() {
    try {
        const data = yield call(fetchQuizFromApi);
        console.log(data)
    } catch(err) {

    }
}

export default function* startGameSaga() {
    while(true) {
        // wait for a specific action, then fork and fetch specific data 
        yield take (startGame.type)
        yield fork(fetchQuestionsSaga)
    }
}