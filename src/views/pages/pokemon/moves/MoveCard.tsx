import React from "react";
import { Move } from "../../../../Pokemon/Move/MoveModel";
import { Translate } from "../../../../i18n/components";
import { Typography, Divider } from "@material-ui/core";

interface MoveCardProps {
  movesType: "fastMoves" | "chargedMoves";
  moves: Move[];
  moveElement: Move;
  position: number;
}

export const MoveCard: React.FC<MoveCardProps> = ({
  movesType,
  moves,
  moveElement,
  position,
}) => {
  return (
    <>
      {position > 0 && <Divider variant="middle" />}
      <Typography className={`CardMove`}>
        <Translate id={`moves.${movesType}.${moveElement.name}`} />
        <div className="percentageMoveUsing">
          {`${getPercentageOfUse(moves, moveElement)}%`}
        </div>
      </Typography>
    </>
  );
};

function getPercentageOfUse(moves: Move[], currentMove: Move): number {
  let total = 0;
  moves.forEach((element) => {
    total = total + element.uses;
  });
  return Math.round((currentMove.uses / total) * 100);
}
