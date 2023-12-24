import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import GameCard from "./GameCard";
import GamePlay from "./GamePlay";

import { ICategory, IGame } from "../../Types/GameTypes";

interface GamesProps {
  categories: ICategory[];
  games: IGame[];
  categoryChange: (data: ICategory) => void;
  searchGames: (text: string) => void;
}

const Games: React.FC<GamesProps> = ({
  categories,
  games,
  categoryChange,
  searchGames,
}) => {
  console.log("categories", categories, categories[0]);
  const [visible, setVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState<IGame | null>(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [category, setCategory] = useState<ICategory | null>(
    categories?.length ? categories[0] : null
  );

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
    searchGames(value);
  };

  const onCategoryChange = (event: DropdownChangeEvent) => {
    const value = event.value;
    setCategory(value);
    categoryChange(value);
  };

  const gamePlayOnClick = (game: IGame) => {
    setVisible(true);
    setCurrentGame(game);
  };
  
  return (
    <>
      {visible && (
        <GamePlay
          game={currentGame as IGame}
          visible={visible}
          setVisible={setVisible}
        />
      )}
      <main className="p-4">
        <div className="col-12">
          <Card unstyled className="p-0 fadein animation-duration-1000">
            <div className="flex justify-content-between flex-wrap">
              <span className="p-float-label p-input-icon-left m-2 fadein animation-duration-1000">
                <i className="pi pi-search" />
                <InputText
                  autoFocus
                  name="game-search"
                  placeholder="Games Search"
                  value={globalFilterValue}
                  onChange={onGlobalFilterChange}
                />
              </span>

              <Dropdown
                dataKey="id"
                optionLabel="name"
                className="m-2 fadein animation-duration-1000"
                options={categories}
                value={category}
                placeholder="Categories"
                onChange={onCategoryChange}
              />
            </div>
          </Card>
        </div>
        <div>
          {games.map((game: IGame) => {
            return (
              <GameCard
                game={game}
                key={game.code}
                gamePlayOnClick={gamePlayOnClick}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Games;
