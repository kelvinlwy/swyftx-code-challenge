const initialState = {
  response: null,
  error: null,
  loading: false
}

const actionTypes = {
  init: 'INITIAL_REQUESET',
  success: 'SUCCESS',
  failure: 'FAILURE'
}

const responseReducer = (state = initialState, { type, payload } = {}) => {
  if (!type) return state;

  switch (type) {
    case ( actionTypes.init ):
      return {
        response: null,
        error: null,
        loading: true
      }

    case ( actionTypes.success ) :
      return {
        response: payload,
        error: null,
        loading: false
      }

    case( actionTypes.failure ):
      return {
        response: null,
        error: payload,
        loading: false
      }

    default :
      return state
  }
}

export { initialState, actionTypes, responseReducer }
