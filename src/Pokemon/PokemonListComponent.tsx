import React, { useState } from "react";
import { usePvpokeData } from "./Pokemon.hook";
import { Meta } from "../Meta/Meta";
import { League } from "../League/League";
import "./PokemonListComponent.scss";
import { MetaSwitcher } from "../Meta/MetaSwitcher";
import { useHistory, Link } from "react-router-dom";
import { PokemonCard } from "./PokemonCard";
import { LeagueSwitcher } from "../League/LeagueSwitcher";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PokemonProps } from "./Pokemon.model";
import { Translate } from "../i18n";

export interface PokemonListComponentProps {
  meta?: Meta;
  league?: League;
  limit?: number;
  readOnly?: boolean;
}

export const PokemonListComponent: React.FC<PokemonListComponentProps> = ({
  meta = Meta.GoBattleLeague,
  league = League.Master,
  limit,
  readOnly = false,
}) => {
  const [metaState, setMetaState] = useState<Meta>(meta);
  const [leagueState, setLeagueState] = useState<League>(league);
  const { pvpokeData, error } = usePvpokeData(metaState, leagueState);
  const history = useHistory();

  const displayProgress: boolean = !pvpokeData || pvpokeData.length <= 1;

  function metaChangeHandler(meta: Meta) {
    setMetaState(meta);
    history.push(`/${meta}/${leagueState}`);
  }

  function leagueChangeHandler(league: League) {
    setLeagueState(league);
    history.push(`/${metaState}/${league}`);
  }

  const getURLToPokemonDetails = (pokemon: PokemonProps) => {
    return `/${metaState}/${leagueState}/${pokemon.speciesId}`;
  };

  function renderPokemons(): JSX.Element {
    let pokemonList = pvpokeData;
    if (limit) {
      pokemonList = pvpokeData.slice(0, limit);
    }
    return (
      <>
        {displayProgress && <CircularProgress />}
        {pvpokeData.length > 0 && error === null && (
          <>
            {readOnly && (
              <h2 className="metaLeagueTitle">
                <Translate id={`metas.${metaState}`} />
                <Translate id="pages.home.rankingTitle" />
                <Translate id={`leagues.${leagueState}`} />
              </h2>
            )}
            <div className={"pokemonCardList"}>
              {pokemonList.map((element, index) => {
                return (
                  <PokemonCard
                    key={`${element.speciesId}-${index}`}
                    pokemon={element}
                    rank={index + 1}
                    getURLToPokemonDetails={getURLToPokemonDetails}
                  />
                );
              })}
            </div>
            {readOnly && (
              <Link
                to={`/${metaState}/${leagueState}`}
                className="more"
                href={`/${metaState}/${leagueState}`}
              >
                <Translate id="pages.home.seeMore" />
              </Link>
            )}
          </>
        )}

        {error !== null && (
          <div className="error">
            <strong>Error loading Pokemons from Meta {meta.toString()}.</strong>
            <br />
            {error}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {!readOnly && (
        <div className="InnerMenu">
          <MetaSwitcher meta={metaState} setMetaFct={metaChangeHandler} />
          <LeagueSwitcher
            meta={metaState}
            league={leagueState}
            setLeagueFct={leagueChangeHandler}
          />
        </div>
      )}
      <div className="tabContainer">{renderPokemons()}</div>
    </>
  );
};
