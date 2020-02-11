import React from 'react';
import './App.scss';
import { I18nProvider } from './i18n';
import LanguageSwitcher from './i18n/LanguageSwitcher';
import { PokemonListComponent } from './Pokemon/PokemonListComponent';
import { Meta } from './Meta/Meta';
import GA from "./Analytics/GoogleAnalytics";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { League } from './League/League';

const messages = {
  en: require("./locales/en"),
  es: require("./locales/es"),
  fr: require("./locales/fr")
};


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        { GA.init() && <GA.RouteTracker /> }
        <I18nProvider defaultLang="fr" messages={messages}>
          <div className="App">
            <header className="AppHeader">
              <div className="AppLogo">
                <h1>
                  PogoJutsu
                </h1>
              </div>
              <div />
              <div />
            </header>
            <body className="AppBody">
              <LanguageSwitcher />
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                  <PokemonListComponent />
                </Route>
                <Route exact path={`/${Meta.GoBattleLeague}`}>
                  <Redirect to={`/${Meta.GoBattleLeague}/${League.Ultra}`} />
                </Route>
                <Route exact path={`/${Meta.GoBattleLeague}/${League.Great}`}>
                  <PokemonListComponent meta={Meta.GoBattleLeague} league={League.Great}/>
                </Route>
                <Route exact path={`/${Meta.GoBattleLeague}/${League.Ultra}`}>
                  <PokemonListComponent meta={Meta.GoBattleLeague} league={League.Ultra}/>
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
              </Switch>
            </body>
          </div>
          <footer className="AppFooter">
            <div className="FooterCredits">
              <div className="CreditsPartOne">
                <p>
                  Data from <a className="AppLink" href="https://pvpoke.com">PvPoke.com</a> <a className="AppLink" href="https://github.com/pvpoke/pvpoke">https://github.com/pvpoke/pvpoke</a>
                </p>
                <p>
                  Images from <a className="AppLink" href="https://pokeapi.co/" >PokéAPI</a> & <a className="AppLink" href="https://thesilphroad.com/" >thesilphroad.com</a>
                </p>
              </div>
              <div className="CreditsPartTwo">
              </div>
              <div className="CreditsPartThree">
              </div>
            </div>
            <div className="FooterBottom">
              © 2019 PogoJutsu
            </div>
          </footer>
        </I18nProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
