import React from 'react';
import './App.scss';
import { I18nProvider } from '../../../i18n';
import GA from "../../../Analytics/GoogleAnalytics";
import { BrowserRouter } from "react-router-dom";
import { FooterComponent } from '../components/Footer';
import { Body } from '../components/Body';
import { Header } from '../components/Header';

const messages = {
  en: require("../../../locales/en"),
  es: require("../../../locales/es"),
  fr: require("../../../locales/fr")
};


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        { GA.init() && <GA.RouteTracker /> }
        <I18nProvider defaultLang="fr" messages={messages}>
          <div className="App">
            <Header />
            <Body />
          </div>
          <FooterComponent />
        </I18nProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
