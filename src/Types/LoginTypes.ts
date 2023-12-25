export interface ILogin {
  username: string;
  password: string;
}
export interface IUser {
  name: string;
  avatar: string;
  event: string;
  username?: string;
}
export interface LoginResponse {
  status: string;
  player: IUser;
}
