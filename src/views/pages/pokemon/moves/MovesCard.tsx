import React from "react";
import { Move } from "../../../../Pokemon/Move/MoveModel";
import { Translate } from "../../../../i18n/components";
import Card from "@material-ui/core/Card";
import { CardContent, Typography } from "@material-ui/core";

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
          <h2>
            <Translate id={`moves.${movesType}.label`} />
          </h2>
          <div className="cardMoves">
            {sortMoves.map((moveElement: Move) => {
              return (
                <>
                  <Typography className={`CardMove`}>
                    <Translate id={`moves.${movesType}.${moveElement.name}`} />
                    <div className="percentageMoveUsing">
                      {`${getPercentageOfUse(moves, moveElement)}%`}
                    </div>
                  </Typography>
                </>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function getPercentageOfUse(moves: Move[], currentMove: Move): number {
  let total = 0;
  moves.forEach((element) => {
    total = total + element.uses;
  });
  return Math.round((currentMove.uses / total) * 100);
}
