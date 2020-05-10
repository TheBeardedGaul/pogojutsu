import React from "react";
import { PokemonCard } from "../../../Pokemon/PokemonCard";
import { PokemonProps } from "../../../Pokemon/Pokemon.model";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { League } from "../../../League/League";
import { Meta } from "../../../Meta/Meta";
import "./PokemonPage.scss";
import { MovesCardHandler } from "./moves/MovesCardHandler";

type PokemonPageProps = RouteComponentProps<{
  speciesId: string;
  meta: Meta;
  league: League;
}>;

export const PokemonPage: React.FC<PokemonPageProps> = (props) => {
  const history = useHistory();
  const pokemonFromHistory: any = history.location.state;
  //   const pokemonFromURL: PokemonProps = props.match.params as PokemonPageProps;
  const pokemon: PokemonProps = pokemonFromHistory.pokemon as PokemonProps;
  return (
    <div className="PokemonPage">
      <PokemonCard key={`${pokemon.speciesId}`} pokemon={pokemon} />
      <MovesCardHandler
        speciesId={pokemon.speciesId}
        meta={Meta.GoBattleLeague}
        league={League.Master}
      />
    </div>
  );
};
