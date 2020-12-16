import React, { useMemo, useReducer } from 'react';
import AppContext from "./appContext";

import * as AppReducer from './reducers/AppReducer'

const AppContextState = ({ children }) => {
  const [appState, appStateDispatch] = useReducer(
    AppReducer.AppReducer,
    AppReducer.initialState
  )

  const value = useMemo(() => ( {
      appState,
      appStateDispatch
    } ),
    [appState, appStateDispatch])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextState
