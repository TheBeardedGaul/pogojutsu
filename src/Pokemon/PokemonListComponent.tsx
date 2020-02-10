import React, { useState } from "react";
import { useMetaRankedPokemon } from "./Pokemon.hook";
import { Meta } from "../Meta/Meta";
import { League } from "../League/League";
import { PokemonComponent } from "./PokemonComponent";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import { Translate } from "../i18n";
import "./PokemonListComponent.scss";
import { MetaSwitcher } from "../Meta/MetaSwitcher";
import { useHistory } from "react-router-dom";

export interface PokemonListComponentProps {
  meta?: Meta;
  league?: League;
}

export const PokemonListComponent: React.FC<PokemonListComponentProps> = ({meta = Meta.GoBattleLeague, league = League.Great}) => {
  const [metaState, setMetaState] = useState<Meta>(meta);
  const [leagueState, setLeagueState] = useState<League>(league);
  const { data, error } = useMetaRankedPokemon(metaState, leagueState);
  const tab = useTabState({ selectedId: leagueState.toString() });
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
            return <PokemonComponent key={`${element.speciesId}-${index}`} pokemon={element} rank={index+1} />
          })}
          </div>
        )}

        {error !== null && (
          <div className="error">
            <strong>Error loading Pokemons from Meta {Meta.Rose.toString()}.</strong>
            <br />
            {error}
          </div>
        )}
      </>
    );
  }
    
    return (
      <>
        <MetaSwitcher meta={metaState} setMetaFct={metaChangeHandler} />
        <div className="tabContainer">
          <TabList {...tab} aria-label="Tabs for selected meta" className="tabList">
            <Tab {...tab} stopId={League.Great} className="languageButton tab" onClick={() => leagueChangeHandler(League.Great)}>
              <Translate id={`leagues.great`} />
            </Tab>
            <Tab {...tab} stopId={League.Ultra} className="languageButton tab" onClick={() => leagueChangeHandler(League.Ultra)} >
              <Translate id={`leagues.ultra`} />
            </Tab>
            <TabPanel {...tab} stopId={League.Great} className="tabPanel">
              {leagueState === League.Great && (renderPokemons())}
            </TabPanel>
            <TabPanel {...tab} stopId={League.Ultra} className="tabPanel">
              {leagueState === League.Ultra && (renderPokemons())}
            </TabPanel>
            
          </TabList>
        </div>
      </>
    );
}