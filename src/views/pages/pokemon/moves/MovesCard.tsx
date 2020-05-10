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
  return (
    <Card className="movesCard">
      <CardContent className="CardContent">
        <div className="cardText">
          <h2>
            <Translate id={`moves.${movesType}.label`} />
          </h2>
          <div className="cardMoves">
            {moves.map((moveElement: Move) => {
              return (
                <>
                  <Typography className={`CardMove FirstMove`}>
                    <Translate id={`moves.${movesType}.${moveElement.name}`} />
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
