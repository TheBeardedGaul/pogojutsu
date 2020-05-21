import React from "react";
import { Translate } from "../../../../i18n/components";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { Matchup } from "../../../../Pokemon/Pokemon.model";
import { MatchupElement } from "./MatchupElement";
import List from "@material-ui/core/List";

export type MatchupType = "keyMatchup" | "counter";

interface MatchupsCardProps {
  matchupType: MatchupType;
  matchups: Matchup[];
}

export const MatchupsCard: React.FC<MatchupsCardProps> = ({
  matchupType,
  matchups,
}) => {
  const sortedMatchups = matchups.sort((matchupA, matchupB) => {
    if (matchupType === "keyMatchup") {
      return matchupB.rating - matchupA.rating;
    } else {
      return matchupB.opRating - matchupA.opRating;
    }
  });
  return (
    <Card className="matchupsCard">
      <CardContent className="CardContent">
        <div className="cardText">
          <h2>
            <Translate id={`matchup.${matchupType}.label`} />
          </h2>
          <List>
            {sortedMatchups.map((matchupElement: Matchup) => {
              return (
                <MatchupElement
                  matchupType={matchupType}
                  matchup={matchupElement}
                />
              );
            })}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};
