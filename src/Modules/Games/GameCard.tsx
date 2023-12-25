import React, { useContext } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

import { ICategory, IGame } from "../../Types/GameTypes";
import { AppContext } from "../../Framework/Context/Context";

import { TEXT_LABELS } from "../../Utilities/TextLabels";

interface GamePlayProps {
  game: IGame;
  gamePlayOnClick: (game: IGame) => void;
}

const GameCard: React.FC<GamePlayProps> = ({ game, gamePlayOnClick }) => {
  const ALL_CATEGORY_ID = 0;
  const { state } = useContext(AppContext);
  const getCategoryNameById = (id: number) => {
    return state.categories?.find((category: ICategory) => category.id === id)
      ?.name;
  };

  return (
    <div className="col-12">
      <Card className="game-card adein animation-duration-500" key={game.code}>
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-30rem xl:w-24rem  block xl:block mx-auto border-round fadein animation-duration-500"
            src={game.icon}
            alt={game.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900 fadein animation-duration-500">
                {game.name}
              </div>
              <div className="text-left fadein animation-duration-500">
                {game.description}
              </div>
              <div className="flex flex-row">
                {game.categoryIds.map((id: number) => {
                  return (
                    id !== ALL_CATEGORY_ID && (
                      <Tag
                        key={id}
                        severity="info"
                        value={getCategoryNameById(id)}
                        className="mr-2 fadein animation-duration-500"
                      ></Tag>
                    )
                  );
                })}
              </div>
            </div>
            <div className="flex sm:flex-column sm:align-items-end gap-3 sm:gap-2">
              <Button
                icon="pi pi-play"
                className="p-button-rounded fadein animation-duration-500"
                tooltip={TEXT_LABELS.gamesModule.play}
                tooltipOptions={{
                  position: "bottom",
                  mouseTrack: true,
                  mouseTrackTop: 15,
                }}
                onClick={() => gamePlayOnClick(game)}
              ></Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameCard;
