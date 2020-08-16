import React from "react";
import { Move } from "../../../../Pokemon/Move/MoveModel";
import { Translate } from "../../../../i18n/components";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { MoveCard } from "./MoveCard";

interface MovesCardProps {
  movesType: "fastMoves" | "chargedMoves";
  moves: Move[];
}

export const MovesCard: React.FC<MovesCardProps> = ({ movesType, moves }) => {
  const sortMoves = moves.sort((moveA, moveB) => moveB.uses - moveA.uses);
  return (
    <Card className="movesCard">
      <CardContent className="CardContent">
        <div className="cardText">
          <h3>
            <Translate id={`moves.${movesType}.label`} />
          </h3>
          <div className="cardMoves">
            {sortMoves.map((moveElement: Move, index: number) => {
              return (
                <MoveCard
                  movesType={movesType}
                  moves={moves}
                  moveElement={moveElement}
                  position={index}
                />
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
