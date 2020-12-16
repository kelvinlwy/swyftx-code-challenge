import { useCallback, useContext } from 'react';
import * as ACTIONS from './actionTypes'
import AppContext from "../appContext";

const useAppAction = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppAction should be used with context provider')

  const { appState, appStateDispatch } = context;

  const setCurrentReposList = useCallback((repos) => {
    appStateDispatch({ type: ACTIONS.SET_REPOS, repos })
  }, [appStateDispatch])

  return { appState, appStateDispatch, setCurrentReposList }
}

export default useAppAction
