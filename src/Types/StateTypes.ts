import { ICategory } from "./GameTypes";
import { IUser } from "./LoginTypes";

export interface IAppState {
  user: IUser | null;
  categories: ICategory[] | null;
}
