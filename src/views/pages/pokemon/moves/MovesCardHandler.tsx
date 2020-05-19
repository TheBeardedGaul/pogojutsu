import React from "react";
import { MovesCard } from "./MovesCard";
import { Move } from "../../../../Pokemon/Move/MoveModel";
import "./MovesCard.scss";

interface MovesCardHandlerProps {
  fastMoves: Move[];
  chargedMoves: Move[];
}

export const MovesCardHandler: React.FC<MovesCardHandlerProps> = ({
  fastMoves,
  chargedMoves,
}) => {
  return (
    <div className="MovesCard">
      <MovesCard movesType="fastMoves" moves={fastMoves} />
      <MovesCard movesType="chargedMoves" moves={chargedMoves} />
    </div>
  );
};
