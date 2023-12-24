import React, { useEffect, useRef, useState } from "react";

import HeaderHOC from "../../Shared/Components/HeaderHOC";
import Games from "./Games";

import { getCategories, getGames } from "../../Services/GamesService";
import { ICategory, IGame } from "../../Types/GameTypes";

const GamesContainer: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [games, setGames] = useState<IGame[]>([]);
  const initialGames = useRef<IGame[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
        const gamesRes = await getGames();
        initialGames.current = gamesRes;
        setGames(gamesRes);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const categoryChange = (category: ICategory) => {
    const filterGames = initialGames.current.filter((game: IGame) =>
      game.categoryIds.includes(category.id)
    );
    setGames(filterGames);
  };

  const searchGames = (searchName: string) => {
    const lowerSearchName = searchName.toLowerCase();
    const resultGames = initialGames.current.filter((game: IGame) =>
      game.name.toLowerCase().includes(lowerSearchName)
    );
    setGames(resultGames);
  };

  return (
    <Games
      categories={categories}
      games={games}
      categoryChange={categoryChange}
      searchGames={searchGames}
    />
  );
};

export default HeaderHOC(GamesContainer);
