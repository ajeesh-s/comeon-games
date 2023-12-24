import { ICategory } from "./GameTypes";
import { IUser } from "./LoginTypes";

export type AppAction =
  | {
      type: "LOGIN_SUCCESS";
      payload: IUser;
    }
  | {
      type: "LOGOUT_SUCCESS";
    }
  | {
      type: "SET_CATEGORIES";
      payload: ICategory[];
    };
