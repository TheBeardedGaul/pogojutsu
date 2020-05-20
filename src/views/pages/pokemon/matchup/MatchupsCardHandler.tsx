import React from "react";
import { Matchup } from "../../../../Pokemon/Pokemon.model";
import { MatchupsCard } from "./MatchupsCard";
import "./MatchupsCard.scss";

interface MatchupsCardHandlerProps {
  keyMatchups: Matchup[];
  counters: Matchup[];
}

export const MatchupsCardHandler: React.FC<MatchupsCardHandlerProps> = ({
  keyMatchups,
  counters,
}) => {
  return (
    <div className="MatchupCard">
      <MatchupsCard matchupType="keyMatchup" matchups={keyMatchups} />
      <MatchupsCard matchupType="counter" matchups={counters} />
    </div>
  );
};
