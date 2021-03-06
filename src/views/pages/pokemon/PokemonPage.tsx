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
  const { pvpokeData } = usePvpokeData(metaState, leagueState, speciesIdState);
  return (
    <>
      {console.log("Pokemon Page render", JSON.stringify(props))}
      <div className="PokemonPage">
        {pvpokeData && pvpokeData.length === 1 && (
          <>
            {/* <h1>
              <Translate
                id="pages.pokemon.title"
                values={[
                  pvpokeData[0].speciesId,
                  translate(`metas.${metaState}`),
                  translate(`leagues.${leagueState}`),
                ]}
              />
            </h1> */}
            <div className="pokemonPageBody">
              <PokemonCard pokemon={pvpokeData[0]} />
              <MovesCardHandler
                fastMoves={pvpokeData[0].fastMoves}
                chargedMoves={pvpokeData[0].chargedMoves}
              />
              {pvpokeData[0].keyMatchups && pvpokeData[0].counters && (
                <MatchupsCardHandler
                  pokemon={pvpokeData[0]}
                  meta={metaState}
                  league={leagueState}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
