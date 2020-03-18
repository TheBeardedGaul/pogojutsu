
import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { PokemonListComponent } from "../Pokemon/PokemonListComponent";
import { Meta } from "../Meta/Meta";
import { League } from "../League/League";

export const RouterComponent: React.FC = props => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
                <PokemonListComponent />
            </Route>
            <Route exact path={`/${Meta.GoBattleLeague}`}>
                <Redirect to={`/${Meta.GoBattleLeague}/${League.Master}`} />
            </Route>
            <Route exact path={`/${Meta.GoBattleLeague}/${League.Great}`}>
                <PokemonListComponent meta={Meta.GoBattleLeague} league={League.Great}/>
            </Route>
            <Route exact path={`/${Meta.GoBattleLeague}/${League.Ultra}`}>
                <PokemonListComponent meta={Meta.GoBattleLeague} league={League.Ultra}/>
            </Route>
            <Route exact path={`/${Meta.GoBattleLeague}/${League.Master}`}>
                <PokemonListComponent meta={Meta.GoBattleLeague} league={League.Master}/>
            </Route>
            <Route exact path={`/${Meta.Rose}`}>
                <Redirect to={`/${Meta.Rose}/${League.Great}`} />
            </Route>
            <Route exact path={`/${Meta.Rose}/${League.Great}`}>
                <PokemonListComponent meta={Meta.Rose} league={League.Great}/>
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
                <PokemonListComponent meta={Meta.Toxic} league={League.Great}/>
            </Route>
            <Route exact path={`/${Meta.Toxic}/${League.Ultra}`}>
                <Redirect to={`/${Meta.Toxic}/${League.Great}`} />
            </Route>
            <Route exact path={`/${Meta.Toxic}/${League.Master}`}>
                <Redirect to={`/${Meta.Toxic}/${League.Great}`} />
            </Route>
        </Switch>
    )
}
            