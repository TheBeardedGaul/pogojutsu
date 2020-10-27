import { useState, useEffect } from "react";
import axios from "axios";
import { Move } from "./MoveModel";

export function useMoveDataPvPoke(move: Move, moves?: any[]) {
  const [data, setData] = useState<Move | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(undefined);
    setError(null);
    if (moves) {
      setData(getMove(move, moves));
    } else {
      axios
        .get(
          `https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/gamemaster.json`
        )
        .then((apiResult) => {
          setData(getMove(move, apiResult.data.moves as any[]));
        })
        // Gestion des erreurs
        .catch((apiError) => {
          setError(apiError.message);
        });
    }
  }, [move, moves]);
  return { data, error };
}

function getMove(move: Move, moves: any[]): Move {
  const foundMove = moves.filter((element) => element.moveId === move.name)[0];
  return {
    name: move.name,
    type: move.type,
    uses: move.uses,
    power: foundMove.power,
    energy: foundMove.energy,
    energyGain: foundMove.energyGain,
  };
}

export function useMovesDataPvPoke() {
  const [movesData, setMovesData] = useState<any[] | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMovesData(undefined);
    setError(null);
    axios
      .get(
        `https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/gamemaster.json`
      )
      .then((apiResult) => {
        setMovesData(apiResult.data.moves as any[]);
      })
      // Gestion des erreurs
      .catch((apiError) => {
        setError(apiError.message);
      });
  }, []);
  return { movesData, error };
}
