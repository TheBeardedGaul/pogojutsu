import React from "react";
import { useMetaRankedPokemon } from "./Pokemon.hook";
import { Meta } from "../Data/SilphRoad/Meta/Meta";
import { PokemonComponent } from "./PokemonComponent";

export const PokemonListComponent: React.FC<any> = () => {
    const { data, error } = useMetaRankedPokemon(Meta.Fusion);
    
    return (
        <>
        {data.length > 0 && error === null && (
          <div className={"pokemonCardList"}>
          {data.map((element, index) => {
            return <PokemonComponent key={`${element.speciesId}-${index}`} pokemon={element} rank={index+1} />
          })}
          </div>
        )}

        {error !== null && (
          <div className="error">
            <strong>Error loading Pokemons from Meta {Meta.Fusion.toString()}.</strong>
            <br />
            {error}
          </div>
        )}
        </>
    );
}