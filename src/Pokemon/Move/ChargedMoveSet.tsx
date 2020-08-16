import React from "react";
import styles from "../Pokemon.module.scss";
import { Translate } from "../../i18n";
import { Typography, Divider, Badge } from "@material-ui/core";
import { useMoveDataPvPoke } from "./MoveHook";
import { Move } from "./MoveModel";
import "./ChargedMoveSet.scss";

interface LocalProps {
  chargedMove: Move;
  fastMoveEnergyGain: number;
  moves?: any[];
}

export const ChargedMoveSet: React.FC<LocalProps> = ({
  chargedMove,
  fastMoveEnergyGain,
  moves,
}) => {
  const { data } = useMoveDataPvPoke(chargedMove, moves);
  return (
    <>
      <Divider variant="middle" />
      {data && data.energy && (
        <Badge
          badgeContent={Math.ceil(data.energy / fastMoveEnergyGain)}
          color="error"
          className="ChargedMoveEnergyBadge"
        >
          <Typography className={styles.CardMove}>
            <Translate id={`moves.chargedMoves.${chargedMove.name}`} />
          </Typography>
        </Badge>
      )}
      {data === undefined && (
        <Typography className={styles.CardMove}>
          <Translate id={`moves.chargedMoves.${chargedMove.name}`} />
        </Typography>
      )}
    </>
  );
};
