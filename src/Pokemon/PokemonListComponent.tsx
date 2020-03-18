import React, { useState } from "react";
import { usePvpokeData } from "./Pokemon.hook";
import { Meta } from "../Meta/Meta";
import { League } from "../League/League";
import "./PokemonListComponent.scss";
import { MetaSwitcher } from "../Meta/MetaSwitcher";
import { useHistory } from "react-router-dom";
import { PokemonCard } from "./PokemonCard";
import { LeagueSwitcher } from "../League/LeagueSwitcher";

export interface PokemonListComponentProps {
  meta?: Meta;
  league?: League;
}

export const PokemonListComponent: React.FC<PokemonListComponentProps> = ({meta = Meta.GoBattleLeague, league = League.Master}) => {
  const [metaState, setMetaState] = useState<Meta>(meta);
  const [leagueState, setLeagueState] = useState<League>(league);
  const { data, error } = usePvpokeData(metaState, leagueState);
  const history = useHistory();

  function metaChangeHandler(meta: Meta) {
    setMetaState(meta);
    history.push(`/${meta}/${leagueState}`);
  }

  function leagueChangeHandler(league: League) {
    setLeagueState(league);
    history.push(`/${metaState}/${league}`);
  }


  function renderPokemons(): JSX.Element {
    return (
      <>
        {data.length > 0 && error === null && (
          <div className={"pokemonCardList"}>
          {data.map((element, index) => {
            return <PokemonCard key={`${element.speciesId}-${index}`} pokemon={element} rank={index+1} />
          })}
          </div>
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
        <div className="InnerMenu">
          <MetaSwitcher meta={metaState} setMetaFct={metaChangeHandler} />
          <LeagueSwitcher meta={metaState} league={leagueState} setLeagueFct={leagueChangeHandler} />
        </div>
        <div className="tabContainer">
          {renderPokemons()}
        </div>
      </>
    );
}