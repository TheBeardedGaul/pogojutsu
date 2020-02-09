import React from "react";
import { useMetaRankedPokemon } from "./Pokemon.hook";
import { Meta } from "../Meta/Meta";
import { PokemonComponent } from "./PokemonComponent";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import { Translate } from "../i18n";
import "./PokemonListComponent.scss";

export interface PokemonListComponentProps {
  meta: Meta;
}

export const PokemonListComponent: React.FC<PokemonListComponentProps> = ({meta}) => {
    const { data, error } = useMetaRankedPokemon(meta);
    const tab = useTabState({ selectedId: "1500" });
    
    return (
      <div className="tabContainer">
        <TabList {...tab} aria-label="Tabs for selected meta" className="tabList">
          <Tab {...tab} stopId="1500" className="languageButton tab">
            <Translate id={`leagues.great`} />
          </Tab>
          <Tab {...tab} stopId="2500" className="languageButton tab">
            <Translate id={`leagues.ultra`} />
          </Tab>
          <TabPanel {...tab} stopId="1500" className="tabPanel">
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
          </TabPanel>
          <TabPanel {...tab} stopId="2500" className="tabPanel">

          </TabPanel>
          
        </TabList>
      </div>
    );
}