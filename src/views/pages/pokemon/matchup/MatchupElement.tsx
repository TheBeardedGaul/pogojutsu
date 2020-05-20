import React, { useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { Matchup } from "../../../../Pokemon/Pokemon.model";
import { usePokeApi } from "../../../../Pokemon/Pokemon.hook";
import Context from "../../../../i18n/context";
import pokemonTranslate from "pokemon";
import { MatchupType } from "./MatchupsCard";

interface MatchupElementProps {
  matchupType: MatchupType;
  matchup: Matchup;
}

export const MatchupElement: React.FC<MatchupElementProps> = ({
  matchupType,
  matchup,
}) => {
  const [matchupState] = useState<any>({
    speciesId: matchup.speciesId,
    score: 0,
    fastMoves: [],
    chargedMoves: [],
  });
  const { data } = usePokeApi(matchupState);
  return (
    <>
      {data !== undefined && (
        <ListItem className="matchupElementCard">
          <ListItemAvatar className="CardImage">
            <Avatar>
              <img src={data.sprites.front_default} alt="Sprite" />
              {/* {data && data.shadow && (
                <img
                  className={"ShadowIcon"}
                  src="https://silph.gg/img/icon-shadow-purple.png"
                  alt={"shadow"}
                />
              )} */}
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
            </div>
          </ListItemText>
        </ListItem>
      )}
    </>
  );
};
