import { AppAction } from '../../Types/ActionTypes';
import { IUser } from '../../Types/LoginTypes';

export const loginSuccess = (user: IUser): AppAction => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const logoutSuccess = (): AppAction => ({
  type: "LOGOUT_SUCCESS",
});