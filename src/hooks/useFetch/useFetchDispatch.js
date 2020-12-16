import { useCallback, useReducer } from 'react'
import { actionTypes, responseReducer, initialState } from "./responseReducer";

/**
 * Custom hook to provide fetch action dispatcher
 */
const useFetchDispatch = () => {
  const [results, dispatch] = useReducer(responseReducer, initialState);

  const init = useCallback(() =>
      dispatch({ type: actionTypes.init }),
    [dispatch])

  const onSuccess = useCallback((response) =>
      dispatch({ type: actionTypes.success, payload: response }),
    [dispatch])

  const onError = useCallback((error) =>
      dispatch({ type: actionTypes.failure, payload: error }),
    [dispatch])

  return {
    init,
    onSuccess,
    onError,
    results
  }
}

export default useFetchDispatch;
