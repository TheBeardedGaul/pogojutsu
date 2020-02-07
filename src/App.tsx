import React, { useState } from 'react';
import './App.css';
import { I18nProvider } from './i18n';
import LanguageSwitcher from './i18n/LanguageSwitcher';
import { PokemonListComponent } from './Pokemon/PokemonListComponent';
import { Meta } from './Meta/Meta';
import { MetaSwitcher } from './Meta/MetaSwitcher';
import GA from "./Analytics/GoogleAnalytics";

const messages = {
  en: require("./locales/en"),
  es: require("./locales/es"),
  fr: require("./locales/fr")
};


const App: React.FC = () => {
  const [metaState, setMetaState] = useState<Meta>(Meta.Rose);
  return (
    <>
      { GA.init() && <GA.RouteTracker /> }
      <I18nProvider defaultLang="fr" messages={messages}>
        <div className="App">
          <header className="App-header">
            <div className="App-logo">
              <h1>
                PogoJutsu
              </h1>
            </div>
            <div />
            <div />
          </header>
          <body className="App-body">
            <LanguageSwitcher />
            <MetaSwitcher meta={metaState} setMetaFct={setMetaState} />
            <PokemonListComponent meta={metaState}/>
          </body>
        </div>
        <footer className="App-footer">
          <div className="footer-credits">
            <div className="credits-part-one">
              <p>
                Data from <a className="App-link" href="https://pvpoke.com">PvPoke.com</a> <a className="App-link" href="https://github.com/pvpoke/pvpoke">https://github.com/pvpoke/pvpoke</a>
              </p>
              <p>
                Images from <a className="App-link" href="https://pokeapi.co/" >PokéAPI</a> & <a className="App-link" href="https://thesilphroad.com/" >thesilphroad.com</a>
              </p>
            </div>
            <div className="credits-part-two">
            </div>
            <div className="credits-part-three">
            </div>
          </div>
          <div className="footer-bottom">
            © 2019 PogoJutsu
          </div>
        </footer>
      </I18nProvider>
    </>
  );
}

export default App;
