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
  fastMoves: Move[];
  chargedMoves: Move[];
  keyMatchups?: Matchup[];
  counters?: Matchup[];
}

export interface Matchup {
  speciesId: string;
  rating: number;
  opRating: number;
}

export interface Pokemon extends ResumePokemon {
  score: number;
  types: Type[];
  fastMove: Move;
  chargedMoves: Move[];
}

export interface ResumePokemon {
  speciesId: string;
  id: number;
  sprites: {
    front_default: string;
  };
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
  };
  moveStr: string;
  score: number;
  scores: number[];
}

export interface PokemonBackUpFlux {
  speciesId: string;
  id: number;
  types: string[];
  sprites: {
    front_default: string;
  };
}
