import { AppAction } from '../../Types/ActionTypes';
import { ICategory } from '../../Types/GameTypes';
import { IUser } from '../../Types/LoginTypes';

export const loginSuccess = (user: IUser): AppAction => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const logoutSuccess = (): AppAction => ({
  type: "LOGOUT_SUCCESS",
});

export const setCategoriesValues = (categories:ICategory[]): AppAction => ({
  type: "SET_CATEGORIES",
  payload: categories,
});