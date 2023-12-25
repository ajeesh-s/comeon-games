import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "primereact/dialog";

import { IGame } from "../../Types/GameTypes";

interface GamePlayProps {
  game: IGame;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const GamePlay: React.FC<GamePlayProps> = ({ game, visible, setVisible }) => {
  const onShowDialog = () => {
    // @ts-ignore
    if (window.comeon && window.comeon.game && window.comeon.game.launch) {
      // @ts-ignore
      window.comeon.game.launch(game.code);
      adjustIframeStyles();
    }
  };

  const adjustIframeStyles = () => {
    const divContainer = document.getElementById("game-launch");
    if (divContainer) {
      const iframeElement = divContainer.querySelector("iframe");

      if (iframeElement) {
        iframeElement.style.width = "80vw";
        iframeElement.style.height = "65vh";
      }
    }
  };

  const dialogStyles = {
    backgroundColor: "black",
  };

  return (
    <Dialog
      contentStyle={dialogStyles}
      headerStyle={dialogStyles}
      visible={visible}
      blockScroll
      style={{ width: "95vw", height: "90vh" }}
      onHide={() => setVisible(false)}
      onShow={() => onShowDialog()}
    >
      <div
        id="game-launch"
        className="w-full flex justify-content-center"
      ></div>
    </Dialog>
  );
};

export default GamePlay;
