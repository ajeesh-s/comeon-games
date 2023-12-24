import { IUser } from './LoginTypes';

export interface IAppState {
  user: IUser | null;
}