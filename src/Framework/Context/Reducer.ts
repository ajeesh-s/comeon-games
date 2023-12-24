import { AppAction } from "../../Types/ActionTypes";
import { IAppState } from "../../Types/StateTypes";


export const reducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user:action.payload }
    case "LOGOUT_SUCCESS":
      localStorage.clear();
        return { ...state, user:null}
    default:
      return state;
  }
};