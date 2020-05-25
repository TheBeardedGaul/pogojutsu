import React from "react";
import { Translate } from "../../../../i18n/components";
import Card from "@material-ui/core/Card";
import { CardContent, Divider } from "@material-ui/core";
import { Matchup } from "../../../../Pokemon/Pokemon.model";
import { MatchupElement } from "./MatchupElement";
import List from "@material-ui/core/List";
import { League } from "../../../../League/League";
import { Meta } from "../../../../Meta/Meta";

export type MatchupType = "keyMatchup" | "counter";

interface MatchupsCardProps {
  speciesId: string;
  matchupType: MatchupType;
  matchups: Matchup[];
  moveStr: string;
  meta: Meta;
  league: League;
}

export const MatchupsCard: React.FC<MatchupsCardProps> = ({
  speciesId,
  matchupType,
  matchups,
  moveStr,
  meta,
  league,
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
          <h3>
            <Translate id={`matchup.${matchupType}.label`} />
          </h3>
          <List>
            {sortedMatchups.map((matchupElement: Matchup, index: number) => {
              return (
                <>
                  {index > 0 && <Divider variant="middle" />}
                  <MatchupElement
                    speciesId={speciesId}
                    matchupType={matchupType}
                    matchup={matchupElement}
                    moveStr={moveStr}
                    meta={meta}
                    league={league}
                  />
                </>
              );
            })}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};
