"use client";

import { ReactElement, useEffect, useRef } from "react";
import { PlayerType } from "../../types/player";
import { PlayerModel } from "./model";

const playerModel = new PlayerModel();

export function Player({
  className = "",
  scale = 1,
  dataSprite = {
    width: 17,
    height: 17,
    rows: 4,
    columns: 8,
    src: "/skins/default/sprites.png",
  },
}: any) {
  const canva = useRef(null);
  useEffect(() => {
    playerModel.init(canva);
    playerModel.draw(dataSprite);
  });

  return (
    <canvas
      width={170}
      height={170}
      ref={canva}
      className={"z-10 border-8 border-solid border-red-700 " + className}
    />
  );
}
