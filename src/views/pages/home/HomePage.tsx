import React from "react";
import { PokemonListComponent } from "../../../Pokemon/PokemonListComponent";
import { Meta } from "../../../Meta/Meta";
import { League } from "../../../League/League";
import "./HomePage.scss";
import { Paper } from "@material-ui/core";
import { Translate } from "../../../i18n";

export const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Paper elevation={2} className={"homeCard"}>
        <p>
          <Translate id="pages.home.welcome" />
        </p>
        <p>
          <Translate id="pages.home.presentation" />
        </p>
      </Paper>
      <PokemonListComponent
        meta={Meta.GoBattleLeague}
        league={League.Great}
        limit={4}
        readOnly={true}
      />
      <PokemonListComponent
        meta={Meta.GoBattleLeague}
        league={League.Ultra}
        limit={4}
        readOnly={true}
      />
      <PokemonListComponent
        meta={Meta.GoBattleLeague}
        league={League.Master}
        limit={4}
        readOnly={true}
      />
      <PokemonListComponent
        meta={Meta.Forest}
        league={League.Great}
        limit={4}
        readOnly={true}
      />
    </div>
  );
};
