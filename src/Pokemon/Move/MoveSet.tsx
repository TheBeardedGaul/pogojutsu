import React from "react";
import styles from "../Pokemon.module.scss";
import { Translate } from "../../i18n";
import { Typography } from "@material-ui/core";
import { useMoveDataPvPoke } from "./MoveHook";
import { Move } from "./MoveModel";
import { ChargedMoveSet } from "./ChargedMoveSet";

interface LocalProps {
  fastMove: Move;
  firstChargedMove: Move;
  secondChargedMove: Move;
  moves?: any[];
}

export const MoveSet: React.FC<LocalProps> = ({
  fastMove,
  firstChargedMove,
  secondChargedMove,
  moves,
}) => {
  const { data } = useMoveDataPvPoke(fastMove, moves);
  return (
    <div className={styles.cardMoves}>
      <Typography className={`${styles.CardMove} ${styles.FirstMove}`}>
        <Translate id={`moves.fastMoves.${fastMove.name}`} />
      </Typography>
      {data && data.energyGain && (
        <>
          <ChargedMoveSet
            chargedMove={firstChargedMove}
            fastMoveEnergyGain={data.energyGain}
            moves={moves}
          />
          <ChargedMoveSet
            chargedMove={secondChargedMove}
            fastMoveEnergyGain={data.energyGain}
            moves={moves}
          />
        </>
      )}
    </div>
  );
};
