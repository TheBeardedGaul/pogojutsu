import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PokemonListComponent } from "../Pokemon/PokemonListComponent";
import { Meta } from "../Meta/Meta";
import { League } from "../League/League";
import { PokemonPage } from "../views/pages/pokemon/PokemonPage";
import { PokemonPageURL } from "./UrlManager";
import { HomePage } from "../views/pages/home/HomePage";

export const RouterComponent: React.FC = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path={PokemonPageURL} component={PokemonPage} />
      <Route exact path={`/${Meta.GoBattleLeague}`}>
        <Redirect to={`/${Meta.GoBattleLeague}/${League.Master}`} />
      </Route>
      <Route exact path={`/${Meta.GoBattleLeague}/${League.Little}`}>
        <Redirect to={`/${Meta.GoBattleLeague}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.GoBattleLeague}/${League.Great}`}>
        <PokemonListComponent
          meta={Meta.GoBattleLeague}
          league={League.Great}
        />
      </Route>
      <Route exact path={`/${Meta.GoBattleLeague}/${League.Ultra}`}>
        <PokemonListComponent
          meta={Meta.GoBattleLeague}
          league={League.Ultra}
        />
      </Route>
      <Route exact path={`/${Meta.GoBattleLeague}/${League.Master}`}>
        <PokemonListComponent
          meta={Meta.GoBattleLeague}
          league={League.Master}
        />
      </Route>
      <Route exact path={`/${Meta.Rose}`}>
        <Redirect to={`/${Meta.Rose}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Rose}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Rose} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Rose}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Rose}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Rose}/${League.Master}`}>
        <Redirect to={`/${Meta.Rose}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Toxic}`}>
        <Redirect to={`/${Meta.Toxic}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Toxic}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Toxic} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Toxic}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Toxic}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Toxic}/${League.Master}`}>
        <Redirect to={`/${Meta.Toxic}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Voyager}`}>
        <Redirect to={`/${Meta.Voyager}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Voyager}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Voyager} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Voyager}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Voyager}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Voyager}/${League.Master}`}>
        <Redirect to={`/${Meta.Voyager}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Ferocious}`}>
        <Redirect to={`/${Meta.Ferocious}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Ferocious}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Ferocious} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Ferocious}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Ferocious}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Ferocious}/${League.Master}`}>
        <Redirect to={`/${Meta.Ferocious}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Forest}`}>
        <Redirect to={`/${Meta.Forest}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Forest}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Forest} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Forest}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Forest}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Forest}/${League.Master}`}>
        <Redirect to={`/${Meta.Forest}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sinister}`}>
        <Redirect to={`/${Meta.Sinister}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sinister}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Sinister} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Sinister}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Sinister}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sinister}/${League.Master}`}>
        <Redirect to={`/${Meta.Sinister}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sorcerous}`}>
        <Redirect to={`/${Meta.Sorcerous}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sorcerous}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Sorcerous} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Sorcerous}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Sorcerous}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sorcerous}/${League.Master}`}>
        <Redirect to={`/${Meta.Sorcerous}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Catacomb}`}>
        <Redirect to={`/${Meta.Catacomb}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Catacomb}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Catacomb} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Catacomb}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Catacomb}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Catacomb}/${League.Master}`}>
        <Redirect to={`/${Meta.Catacomb}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Timeless}`}>
        <Redirect to={`/${Meta.Timeless}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Timeless}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Timeless} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Timeless}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Timeless}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Timeless}/${League.Master}`}>
        <Redirect to={`/${Meta.Timeless}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Premier}/${League.Little}`}>
        <Redirect to={`/${Meta.Premier}/${League.Master}`} />
      </Route>
      <Route exact path={`/${Meta.Premier}`}>
        <Redirect to={`/${Meta.Premier}/${League.Master}`} />
      </Route>
      <Route exact path={`/${Meta.Premier}/${League.Great}`}>
        <Redirect to={`/${Meta.Premier}/${League.Master}`} />
      </Route>
      <Route exact path={`/${Meta.Premier}/${League.Ultra}`}>
        <PokemonListComponent meta={Meta.Premier} league={League.Ultra} />
      </Route>
      <Route exact path={`/${Meta.Premier}/${League.Master}`}>
        <PokemonListComponent meta={Meta.Premier} league={League.Master} />
      </Route>
      <Route exact path={`/${Meta.Sunrise}`}>
        <Redirect to={`/${Meta.Sunrise}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sunrise}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Sunrise} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Sunrise}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Sunrise}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Sunrise}/${League.Master}`}>
        <Redirect to={`/${Meta.Sunrise}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Halloween}`}>
        <Redirect to={`/${Meta.Halloween}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Halloween}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Halloween} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Halloween}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Halloween}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Halloween}/${League.Master}`}>
        <Redirect to={`/${Meta.Halloween}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Flying}`}>
        <Redirect to={`/${Meta.Flying}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Flying}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Flying} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Flying}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Flying}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Flying}/${League.Master}`}>
        <Redirect to={`/${Meta.Flying}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Marsh}`}>
        <Redirect to={`/${Meta.Marsh}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Marsh}/${League.Little}`}>
        <Redirect to={`/${Meta.Marsh}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Marsh}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Marsh} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Marsh}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Marsh}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Marsh}/${League.Master}`}>
        <Redirect to={`/${Meta.Marsh}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Nightfall}`}>
        <Redirect to={`/${Meta.Nightfall}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Nightfall}/${League.Little}`}>
        <Redirect to={`/${Meta.Nightfall}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Nightfall}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Nightfall} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Nightfall}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Nightfall}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Nightfall}/${League.Master}`}>
        <Redirect to={`/${Meta.Nightfall}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Holiday}`}>
        <Redirect to={`/${Meta.Holiday}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Holiday}/${League.Little}`}>
        <Redirect to={`/${Meta.Holiday}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Holiday}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Holiday} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Holiday}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Holiday}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Holiday}/${League.Master}`}>
        <Redirect to={`/${Meta.Holiday}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Little}`}>
        <Redirect to={`/${Meta.Little}/${League.Little}`} />
      </Route>
      <Route exact path={`/${Meta.Little}/${League.Little}`}>
        <PokemonListComponent meta={Meta.Little} league={League.Little} />
      </Route>
      <Route exact path={`/${Meta.Little}/${League.Great}`}>
        <Redirect to={`/${Meta.Little}/${League.Little}`} />
      </Route>
      <Route exact path={`/${Meta.Little}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Little}/${League.Little}`} />
      </Route>
      <Route exact path={`/${Meta.Little}/${League.Master}`}>
        <Redirect to={`/${Meta.Little}/${League.Little}`} />
      </Route>
      <Route exact path={`/${Meta.Kanto}`}>
        <Redirect to={`/${Meta.Kanto}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Kanto}/${League.Little}`}>
        <Redirect to={`/${Meta.Kanto}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Kanto}/${League.Great}`}>
        <PokemonListComponent meta={Meta.Kanto} league={League.Great} />
      </Route>
      <Route exact path={`/${Meta.Kanto}/${League.Ultra}`}>
        <Redirect to={`/${Meta.Kanto}/${League.Great}`} />
      </Route>
      <Route exact path={`/${Meta.Kanto}/${League.Master}`}>
        <Redirect to={`/${Meta.Kanto}/${League.Great}`} />
      </Route>
    </Switch>
  );
};
