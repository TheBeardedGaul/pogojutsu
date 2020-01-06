import { useState, useEffect } from "react";
import { Pokemon, PokemonProps, PokemonFlux, PokemonBackUpFlux } from "./Pokemon.model";
import axios from "axios";
import { Meta } from "../Data/SilphRoad/Meta/Meta";
import { TimelessPokemons } from "../Data/SilphRoad/Meta/Timeless/Overall1500";
import { FusionPokemons } from "../Data/SilphRoad/Meta/Fusion/Overall1500";
import { Type } from "./Type/TypeModel";
import backUpApi from "../Data/pokedex/pokedex.json"

function getPokemonType(apiTypes: any[]): Type[] {
  const result: Type[] = [];
  apiTypes.forEach((type) => {
    let typeStr: string;
    if (typeof type === "string") {
      typeStr = type;
    } else {
      typeStr = type["type"]["name"];
    }
    switch (typeStr) {
      case "normal":
        result.push(Type.Normal);
        break;
      case "fighting":
        result.push(Type.Fighting);
        break;
      case "flying":
        result.push(Type.Flying);
        break;
      case "poison":
        result.push(Type.Poison);
        break;
      case "ground":
        result.push(Type.Ground);
        break;
      case "rock":
        result.push(Type.Rock);
        break;
      case "bug" :
        result.push(Type.Bug);
        break;
      case "ghost":
        result.push(Type.Ghost);
        break;
      case "steel":
        result.push(Type.Steel);
        break;
      case "fire":
        result.push(Type.Fire);
        break;
      case "water":
        result.push(Type.Water);
        break;
      case "grass":
        result.push(Type.Grass);
        break;
      case "electric":
        result.push(Type.Electric);
        break;
      case "psychic":
        result.push(Type.Psychic);
        break;
      case "ice":
        result.push(Type.Ice);
        break;
      case "dragon":
        result.push(Type.Dragon);
        break;
      case "dark":
        result.push(Type.Dark);
        break;
      case "fairy":
        result.push(Type.Fairy);
        break;
      case "shadow":
        throw new Error(`Pokemon's type ${type["type"]["name"]} not known !`);
      default:
        throw new Error(`Pokemon's type ${type["type"]["name"]} not known !`);
    }
  });
  return result;
}

export function usePokeApi(pokemon: PokemonProps) {
  const [data, setData] = useState<Pokemon | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      // Reset states
      setData(undefined);
      setError(null);
      // API call
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.speciesId}/`)
        // Modification du state avec la réponse de l'API
        .then(apiResult => {
          const resultTypes = getPokemonType(apiResult.data["types"] as []);
          const result: Pokemon = {id: apiResult.data["id"], speciesId: pokemon.speciesId, score: pokemon.score, sprites: apiResult.data["sprites"], types: resultTypes, fastMove: pokemon.fastMove, chargedMoves: pokemon.chargedMoves};
          setData(result);
        })
        // Gestion des erreurs
        .catch(apiError => {
          // setError(apiError.message)
          const backUpApiResult: PokemonBackUpFlux[] = backUpApi as PokemonBackUpFlux[];
          backUpApiResult.filter(element => {
            return element.speciesId === pokemon.speciesId;
          }).forEach((apiResult) => {
            const resultTypes = getPokemonType(apiResult.types);
            const result = {id: apiResult.id, speciesId: pokemon.speciesId, score: pokemon.score, sprites: apiResult.sprites, types: resultTypes, fastMove: pokemon.fastMove, chargedMoves: pokemon.chargedMoves};
            setData(result);
          });
        });
    },
    [pokemon]
  );

  return { data, error };
}

export function useMetaRankedPokemon(meta: Meta) {
  const [data, setData] = useState<PokemonProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      setData([]);
      setError(null);
      switch (meta) {
        case Meta.Timeless:
          setData(parseFlux(TimelessPokemons));
          break;
        case Meta.Fusion:
          setData(parseFlux(FusionPokemons));
          break;
        default:
          setError(`The current Meta ${meta} is not allowed`);
      }
    }, [meta]
  );

  return { data, error };
}

export function useFormatedTypes(types: Type[]): string {
  if (types.length > 0) {
    const myString = `Types: ${types[0].toString()}`;
    if (types.length > 1) {
      return `${myString} / ${types[1].toString()}`;
    }
    return myString;
  }
  return "";
}

function parsePokemon(pokemonToParse: PokemonFlux): PokemonProps {
  const movesArray = pokemonToParse.moveStr.split("-");
  (pokemonToParse.moves.fastMoves as []).sort((a,b) => (a["moveId"] > b["moveId"]) ? 1 : ((b["moveId"] > a["moveId"]) ? -1 : 0));
  (pokemonToParse.moves.chargedMoves as []).sort((a,b) => (a["moveId"] > b["moveId"]) ? 1 : ((b["moveId"] > a["moveId"]) ? -1 : 0));
  const fastMove = pokemonToParse.moves.fastMoves[+movesArray[0]];
  const chargedMoves: any[] = [];
  chargedMoves.push(pokemonToParse.moves.chargedMoves[Number.parseInt(movesArray[1])-1]);
  chargedMoves.push(pokemonToParse.moves.chargedMoves[Number.parseInt(movesArray[2])-1]);
  const pokemon: PokemonProps = {speciesId: pokemonToParse.speciesId, score: pokemonToParse.score, fastMove: {name: fastMove.moveId, type: Type.Unknown}, chargedMoves: [{name: chargedMoves[0].moveId, type: Type.Unknown}, {name: chargedMoves[1].moveId, type: Type.Unknown}]};
  return pokemon;
}

function parseFlux(pokemons: PokemonFlux[]): PokemonProps[] {
  const parsedFlux: PokemonProps[] = [];
  let sortedFlux: PokemonProps[] = [];
  pokemons.forEach(element => {
    parsedFlux.push(parsePokemon(element));
  });
  sortedFlux = parsedFlux.sort((pokemonA, pokemonB) => pokemonB.score - pokemonA.score);
  return sortedFlux;
}