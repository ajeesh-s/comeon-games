import { apiService } from "./ApiService";

export const getCategories = async () => {
  try {
    const response = await apiService.get("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGames = async () => {
  try {
    const response = await apiService.get("/games");
    return response.data;
  } catch (error) {
    throw error;
  }
};
