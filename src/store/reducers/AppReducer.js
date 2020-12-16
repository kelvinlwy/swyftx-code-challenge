import * as ACTIONS from '../actions/actionTypes'

const initialState = {
  repos: []
};

const AppReducer = (state  = initialState, action) => {
  switch(action.type) {
    case ACTIONS.SET_REPOS:
      return {
        ...state,
        repos: action.repos
      }

    default: {
      return state
    }
  }
}

export {
  initialState,
  AppReducer
}
