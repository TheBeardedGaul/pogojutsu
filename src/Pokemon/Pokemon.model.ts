import { Move } from "./Move/MoveModel";
import { Type } from "./Type/TypeModel";

export interface PokemonProps {
  id?: number;
  speciesId: string;
  score: number;
  types?: Type[];
  sprites?: {
    front_default: string;
  };
  fastMove: Move;
  chargedMoves: Move[];
}

export interface Pokemon {
  speciesId: string;
  id: number;
  score: number;
  types: Type [];
  sprites: {
    front_default: string;
  },
  fastMove: Move;
  chargedMoves: Move[];
  shadow?: boolean;
}

export interface PokemonFlux {
  speciesId: string;
  speciesName: string;
  matchups: {
      opponent: string;
      rating: number;
      opRating: number;
  }[];
  counters: {
      opponent: string;
      rating: number;
      opRating: number;
  }[];
  moves: {
    fastMoves: any[];
    chargedMoves: any[];
  }
  moveStr: string;
  score: number;
  scores: number[];
};

export interface PokemonBackUpFlux {
  speciesId: string;
  id: number;
  types: string[];
  sprites: {
    front_default: string;
  }
}