import React, { createContext, Dispatch, ReactNode, useReducer } from "react";

import { reducer } from "./Reducer";
import { AppAction } from "../../Types/ActionTypes";
import { IAppState } from "../../Types/StateTypes";

const storedUserData = localStorage.getItem("user");
const initialState: IAppState = { user: storedUserData? JSON.parse(storedUserData) : null };
export const AppContext = createContext<{
  state: IAppState;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};