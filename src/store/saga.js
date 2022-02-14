import {all} from 'redux-saga/effects'
import startGameSaga from './saga/gameInit';

export default function* rootSaga() {
    yield all([startGameSaga()]);
}