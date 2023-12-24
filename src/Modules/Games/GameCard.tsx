import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import { IGame } from "../../Types/GameTypes";

interface GamePlayProps {
  game: IGame;
  gamePlayOnClick: (game: IGame) => void;
}

const GameCard: React.FC<GamePlayProps> = ({ game, gamePlayOnClick }) => {
  return (
    <div className="col-12">
      <Card className="shadow-4 fadein animation-duration-1000" key={game.code}>
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-30rem xl:w-24rem  block xl:block mx-auto border-round fadein animation-duration-1000"
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
            </div>
            <div className="flex sm:flex-column sm:align-items-end gap-3 sm:gap-2">
              <Button
                icon="pi pi-play"
                className="p-button-rounded"
                tooltip="Play"
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
