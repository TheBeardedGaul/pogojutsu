import React, { useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Matchup } from "../../../../Pokemon/Pokemon.model";
import { usePokeApi, usePvpokeData } from "../../../../Pokemon/Pokemon.hook";
import Context from "../../../../i18n/context";
import pokemonTranslate from "pokemon";
import { MatchupType } from "./MatchupsCard";
import { League } from "../../../../League/League";
import { Meta } from "../../../../Meta/Meta";

interface MatchupElementProps {
  speciesId: string;
  matchupType: MatchupType;
  matchup: Matchup;
  moveStr: string;
  meta: Meta;
  league: League;
}

export const MatchupElement: React.FC<MatchupElementProps> = ({
  speciesId,
  matchupType,
  matchup,
  moveStr,
  meta,
  league,
}) => {
  const [matchupState] = useState<any>({
    speciesId: matchup.speciesId,
    score: 0,
    recommandedFastMoves: [],
    recommandedChargedMoves: [],
    fastMoves: [],
    chargedMoves: [],
  });
  const { data } = usePokeApi(matchupState);
  const { pvpokeData } = usePvpokeData(meta, league, matchup.speciesId);
  const leagueUriPath: string =
    league === League.Master
      ? "10000"
      : league === League.Ultra
      ? "2500"
      : "1500";
  return (
    <>
      {data !== undefined && pvpokeData !== undefined && pvpokeData.length > 0 && (
        <ListItem className="matchupElementCard">
          <ListItemAvatar className="cardImage">
            <Avatar>
              <img
                className="avatar"
                src={data.sprites.front_default}
                alt="Sprite"
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <div className="CardMatchup">
              {data && data.shadow && (
                <img
                  className={"ShadowIcon"}
                  src="https://silph.gg/img/icon-shadow-purple.png"
                  alt={"shadow"}
                />
              )}
              <Context.Consumer>
                {(value) =>
                  pokemonTranslate.getName(
                    data.id,
                    value.lang === "es" ? "en" : value.lang
                  )
                }
              </Context.Consumer>
              <div className="rating">
                {matchupType === "keyMatchup"
                  ? matchup.rating
                  : matchup.opRating}
              </div>
              <a
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                href={`https://www.pvpoke.com/battle/${leagueUriPath}/${speciesId}/${matchup.speciesId}/11/${moveStr}/${pvpokeData[0].moveStr}`}
              >
                <img
                  alt="pvpoke icon"
                  className="pvpokeLinkToBattle"
                  src="https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/img/favicon.png"
                />
              </a>
            </div>
          </ListItemText>
        </ListItem>
      )}
    </>
  );
};
