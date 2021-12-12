import {createStore} from 'redux';
import {Action} from './actions';

function reducer(state, action) {
  switch (action.type) {
    case Action.SetResponse:
      return {
        ...state,
        responses: {
          ...state.responses,
          [action.payload.slug]: action.payload.response,
        },
      };
    case Action.StartQuiz:
      return {
        ...state,
        responses: {},
        quizSlug: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  quizSlug: null,
  responses: {},
};

export const store = createStore(reducer, initialState);