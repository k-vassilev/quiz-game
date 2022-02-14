import { take, fork, put, call, delay, cancel } from 'redux-saga/effects';
import {cancelGame, startGame} from '../slices/gameInit';
import {fetchQuizFromApi} from '../../utils/api'
import {fetchQuestionsFail, fetchQuestionsSuccess} from '../slices/game'


function* fetchQuestionsSaga() {
    try {
        yield delay(3000);
        const data = yield call(fetchQuizFromApi);
        yield put(fetchQuestionsSuccess(data))
       
    } catch(err) {
        yield put(fetchQuestionsFail('There was an error fetching the questions.'))
    }
}
// on Api call cancel -> takes in Api call
function * cancelFetchQuiz(forkedSaga) {
    while(true) {
        // If "Cancel" is taking place
        yield take(cancelGame.type);
        // Cancel the ongoing Api call
        yield cancel(forkedSaga)
    }
}

export default function* startGameSaga() {
    while(true) {
        // wait for a specific action, then fork and fetch specific data 
        yield take (startGame.type)
        // Questions Api call
        const forkedSaga =  yield fork(fetchQuestionsSaga)
        // Cancel process of Api call
        yield fork(cancelFetchQuiz, forkedSaga)
    }
}