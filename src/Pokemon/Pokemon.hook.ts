import { useState, useEffect } from "react";
import {
  Pokemon,
  PokemonProps,
  PokemonFlux,
  PokemonBackUpFlux,
  Matchup,
} from "./Pokemon.model";
import axios from "axios";
import { Meta } from "../Meta/Meta";
import { Type } from "./Type/TypeModel";
import backUpApi from "../Data/pokedex/pokedex.json";
import { League } from "../League/League";
import { Move } from "./Move/MoveModel";

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
      case "bug":
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

  useEffect(() => {
    setData(undefined);
    setError(null);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.speciesId.replace(
          "_shadow",
          ""
        )}/`
      )
      // Modification du state avec la réponse de l'API
      .then((apiResult) => {
        const resultTypes = getPokemonType(apiResult.data["types"] as []);
        const isShadow: boolean = pokemon.speciesId.indexOf("_shadow") > -1;
        const result: Pokemon = {
          id: apiResult.data["id"],
          speciesId: pokemon.speciesId,
          score: pokemon.score,
          sprites: apiResult.data["sprites"],
          types: resultTypes,
          fastMove: pokemon.fastMoves[0],
          chargedMoves: pokemon.chargedMoves,
          shadow: isShadow,
        };
        setData(result);
      })
      // Gestion des erreurs
      .catch((apiError) => {
        // setError(apiError.message)
        const backUpApiResult: PokemonBackUpFlux[] = backUpApi as PokemonBackUpFlux[];
        backUpApiResult
          .filter((element) => {
            return element.speciesId === pokemon.speciesId;
          })
          .forEach((apiResult) => {
            const resultTypes = getPokemonType(apiResult.types);
            const result = {
              id: apiResult.id,
              speciesId: pokemon.speciesId,
              score: pokemon.score,
              sprites: apiResult.sprites,
              types: resultTypes,
              fastMove: pokemon.fastMoves[0],
              chargedMoves: pokemon.chargedMoves,
            };
            setData(result);
          });
      });
  }, [pokemon]);
  return { data, error };
}

export function usePvpokeData(
  meta: Meta,
  league: League = League.Great,
  speciesId?: string
) {
  const [data, setData] = useState<PokemonProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const leagueStr =
    league === League.Great
      ? "1500"
      : league === League.Ultra
      ? "2500"
      : "10000";
  const metaStr = meta === Meta.GoBattleLeague ? "all" : meta;

  useEffect(() => {
    setData([]);
    setError(null);
    axios
      .get(
        `https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/${metaStr}/overall/rankings-${leagueStr}.json`
      )
      .then((apiResult) => {
        setData(parseFlux(apiResult.data, speciesId));
      })
      .catch((apiError) => {
        setError(apiError.message);
      });
  }, [metaStr, leagueStr, speciesId]);
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

function parsePokemon(
  pokemonToParse: PokemonFlux,
  speciesId?: string
): PokemonProps {
  const movesArray = pokemonToParse.moveStr.split("-");
  (pokemonToParse.moves.fastMoves as []).sort((a, b) =>
    a["moveId"] > b["moveId"] ? 1 : b["moveId"] > a["moveId"] ? -1 : 0
  );
  (pokemonToParse.moves.chargedMoves as []).sort((a, b) =>
    a["moveId"] > b["moveId"] ? 1 : b["moveId"] > a["moveId"] ? -1 : 0
  );
  let fastMoveIndexToUse = +movesArray[0];
  if (fastMoveIndexToUse >= pokemonToParse.moves.fastMoves.length) {
    fastMoveIndexToUse = fastMoveIndexToUse - 1;
  }
  const fastMove = pokemonToParse.moves.fastMoves[fastMoveIndexToUse];
  const chargedMoves: any[] = [];
  chargedMoves.push(
    pokemonToParse.moves.chargedMoves[Number.parseInt(movesArray[1]) - 1]
  );
  chargedMoves.push(
    pokemonToParse.moves.chargedMoves[Number.parseInt(movesArray[2]) - 1]
  );
  const pokemon: PokemonProps = {
    speciesId: pokemonToParse.speciesId,
    score: pokemonToParse.score,
    fastMoves: getFastMoves(
      fastMove,
      pokemonToParse.moves.fastMoves,
      speciesId
    ),
    chargedMoves: getChargedMoves(
      chargedMoves,
      pokemonToParse.moves.chargedMoves,
      speciesId
    ),
    keyMatchups: getMatchups(pokemonToParse.matchups),
    counters: getMatchups(pokemonToParse.counters),
  };
  return pokemon;
}

function getMatchups(matchups: any[]): Matchup[] {
  const resultMatchups: Matchup[] = [];
  matchups.forEach((element) =>
    resultMatchups.push({
      speciesId: element.opponent,
      rating: element.rating,
      opRating: element.opRating,
    })
  );
  return resultMatchups;
}

function getFastMoves(
  fastMove: any,
  fastMoves?: any[],
  speciesId?: string
): Move[] {
  if (speciesId && fastMoves) {
    let moves: Move[] = [];
    fastMoves.forEach((element: any) =>
      moves.push({
        name: element.moveId,
        type: Type.Unknown,
        uses: element.uses,
      })
    );
    return moves;
  } else {
    return [{ name: fastMove.moveId, type: Type.Unknown, uses: fastMove.uses }];
  }
}

function getChargedMoves(
  chargedMoves: any[],
  chargedMovesPool?: any[],
  speciesId?: string
): Move[] {
  if (speciesId && chargedMovesPool) {
    let moves: Move[] = [];
    chargedMovesPool.forEach((element: any) =>
      moves.push({
        name: element.moveId,
        type: Type.Unknown,
        uses: element.uses,
      })
    );
    return moves;
  } else {
    return [
      {
        name: chargedMoves[0].moveId,
        type: Type.Unknown,
        uses: chargedMoves[0].uses,
      },
      {
        name: chargedMoves[1].moveId,
        type: Type.Unknown,
        uses: chargedMoves[1].uses,
      },
    ];
  }
}

function parseFlux(
  pokemons: PokemonFlux[],
  speciesId?: string
): PokemonProps[] {
  const parsedFlux: PokemonProps[] = [];
  let sortedFlux: PokemonProps[] = [];
  pokemons.forEach((element) => {
    if (speciesId && element.speciesId === speciesId) {
      parsedFlux.push(parsePokemon(element, speciesId));
    } else if (!speciesId) {
      parsedFlux.push(parsePokemon(element));
    }
  });
  sortedFlux = parsedFlux.sort(
    (pokemonA, pokemonB) => pokemonB.score - pokemonA.score
  );
  return sortedFlux;
}
