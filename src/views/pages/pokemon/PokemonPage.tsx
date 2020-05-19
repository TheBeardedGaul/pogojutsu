import React from "react";
import { PokemonCard } from "../../../Pokemon/PokemonCard";
import { RouteComponentProps } from "react-router-dom";
import { League } from "../../../League/League";
import { Meta } from "../../../Meta/Meta";
import "./PokemonPage.scss";
import { MovesCardHandler } from "./moves/MovesCardHandler";
import { usePvpokeData } from "../../../Pokemon/Pokemon.hook";

type PokemonPageProps = RouteComponentProps<{
  speciesId: string;
  meta: Meta;
  league: League;
}>;

export const PokemonPage: React.FC<PokemonPageProps> = (props) => {
  const { data } = usePvpokeData(
    props.match.params.meta,
    props.match.params.league,
    props.match.params.speciesId
  );
  return (
    <div className="PokemonPage">
      {data && data.length === 1 && (
        <>
          <PokemonCard pokemon={data[0]} />
          <MovesCardHandler
            fastMoves={data[0].fastMoves}
            chargedMoves={data[0].chargedMoves}
          />
        </>
      )}
    </div>
  );
};
