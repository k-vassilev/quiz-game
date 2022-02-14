import { take, fork, put, call } from 'redux-saga/effects';
import {startGame} from '../slices/gameInit';
import {fetchQuizFromApi} from '../../utils/api'
import {fetchQuestionsFail, fetchQuestionsSuccess} from '../slices/game'


function* fetchQuestionsSaga() {
    try {
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionsSuccess(data))
       
    } catch(err) {
        yield put(fetchQuestionsFail('There was an error fetching the questions.'))
    }
}

export default function* startGameSaga() {
    while(true) {
        // wait for a specific action, then fork and fetch specific data 
        yield take (startGame.type)
        yield fork(fetchQuestionsSaga)
    }
}