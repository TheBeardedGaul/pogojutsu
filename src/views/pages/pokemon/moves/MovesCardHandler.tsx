import React from "react";
import { League } from "../../../../League/League";
import { Meta } from "../../../../Meta/Meta";
import { MovesCard } from "./MovesCard";
import "./MovesCard.scss";
import { usePvpokeData } from "../../../../Pokemon/Pokemon.hook";

interface MovesCardHandlerProps {
  speciesId: string;
  meta: Meta;
  league: League;
}

export const MovesCardHandler: React.FC<MovesCardHandlerProps> = ({
  speciesId,
  meta,
  league,
}) => {
  const { data, error } = usePvpokeData(meta, league, speciesId);
  return (
    <div className="MovesCard">
      {data && data[0] && (
        <>
          <MovesCard movesType="fastMoves" moves={data[0].fastMoves} />
          <MovesCard movesType="chargedMoves" moves={data[0].chargedMoves} />
        </>
      )}
    </div>
  );
};
