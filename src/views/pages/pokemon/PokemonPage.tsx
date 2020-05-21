import React, { useState } from "react";
import { PokemonCard } from "../../../Pokemon/PokemonCard";
import { RouteComponentProps } from "react-router-dom";
import { League } from "../../../League/League";
import { Meta } from "../../../Meta/Meta";
import "./PokemonPage.scss";
import { MovesCardHandler } from "./moves/MovesCardHandler";
import { usePvpokeData } from "../../../Pokemon/Pokemon.hook";
import { MatchupsCardHandler } from "./matchup/MatchupsCardHandler";

type PokemonPageProps = RouteComponentProps<{
  speciesId: string;
  meta: Meta;
  league: League;
}>;

export const PokemonPage: React.FC<PokemonPageProps> = (props) => {
  const [speciesIdState] = useState<string>(props.match.params.speciesId);
  const [metaState] = useState<Meta>(props.match.params.meta);
  const [leagueState] = useState<League>(props.match.params.league);
  const { data } = usePvpokeData(metaState, leagueState, speciesIdState);
  return (
    <>
      {console.log("Pokemon Page render", JSON.stringify(props))}
      <div className="PokemonPage">
        {data && data.length === 1 && (
          <>
            <PokemonCard pokemon={data[0]} />
            <MovesCardHandler
              fastMoves={data[0].fastMoves}
              chargedMoves={data[0].chargedMoves}
            />
            {data[0].keyMatchups && data[0].counters && (
              <MatchupsCardHandler
                keyMatchups={data[0].keyMatchups}
                counters={data[0].counters}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};
