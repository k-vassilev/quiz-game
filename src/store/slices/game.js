import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    error: null,
    score: null,
    currentQuestionIndex: null
}


const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers: {
        fetchQuestionsSuccess(state, action) {
            state.questions = action.payload;
            state.score = 0;
            state.currentQuestionIndex=0;

        },
        fetchQuestionsFail(state, action) {
            state.error = action.payload
        }
    }
})

export const {fetchQuestionsFail, fetchQuestionsSuccess} = quizSlice.actions;

export default quizSlice.reducer;