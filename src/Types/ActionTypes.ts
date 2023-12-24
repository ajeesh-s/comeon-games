import { IUser } from "./LoginTypes";

export type AppAction =
  | {
    type: "LOGIN_SUCCESS";
    payload: IUser;
  }
  | {
    type: "LOGOUT_SUCCESS";
  };