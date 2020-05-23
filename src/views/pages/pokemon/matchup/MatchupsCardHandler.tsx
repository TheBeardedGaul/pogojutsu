import React from "react";
import { PokemonProps } from "../../../../Pokemon/Pokemon.model";
import { MatchupsCard } from "./MatchupsCard";
import "./MatchupsCard.scss";
import { League } from "../../../../League/League";
import { Meta } from "../../../../Meta/Meta";

interface MatchupsCardHandlerProps {
  pokemon: PokemonProps;
  meta: Meta;
  league: League;
}

export const MatchupsCardHandler: React.FC<MatchupsCardHandlerProps> = ({
  pokemon,
  meta,
  league,
}) => {
  return (
    <div className="MatchupCard">
      <MatchupsCard
        speciesId={pokemon.speciesId}
        matchupType="keyMatchup"
        matchups={pokemon.keyMatchups ? pokemon.keyMatchups : []}
        moveStr={pokemon.moveStr}
        meta={meta}
        league={league}
      />
      <MatchupsCard
        speciesId={pokemon.speciesId}
        matchupType="counter"
        matchups={pokemon.counters ? pokemon.counters : []}
        moveStr={pokemon.moveStr}
        meta={meta}
        league={league}
      />
    </div>
  );
};
