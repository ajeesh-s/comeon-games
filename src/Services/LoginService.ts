import { ILogin, IUser } from "../Types/LoginTypes";
import { apiService } from "./ApiService";

export const login = async (data:ILogin) => {
    try {
      const response = await apiService.post('/login', JSON.stringify(data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const logout = async (data:IUser) => {
    try {
      const response = await apiService.post('/logout', JSON.stringify({username:data.username}));
      return response.data;
    } catch (error) {
      throw error;
    }
  };