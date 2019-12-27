import React, { useState } from "react";
import Context from "./context";
import {
  I18nProviderProps,
  ITranslateProps,
  IContextValue
} from "./interfaces";

// Provider utilisant à la racine de l'application
// pour injecter les messages de traduction
/* Exemple :
    const App = () => (
      <I18nProvider lang="fr" message={{
        fr: { title: "Bienvenue" },
        en: { title: "Welcome" }
      }}>
        <Form />
      </I18nProvider>
    )
*/
export const I18nProvider: React.FC<I18nProviderProps> = ({
  defaultLang,
  messages,
  children
}) => {
  const [lang, setLang] = useState(defaultLang);

  if (!messages[lang]) throw new Error(`Language not found: ${lang}`);
  const value: IContextValue = {
    lang,
    translate: (id: string) => {
      const keys = id.split(".");
      let node: any = messages[lang];
      keys.forEach((element: string) => {
          node = node[element];
      });
      return node || `⚠ ${id}`
    },
    setLang
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// Composant pour afficher un texte traduit à partir d'un id
/* Exemple :
    const Form = () => (
      <button>
        <Translate id="button" />
      </button>
    )
*/
export const Translate: React.FC<ITranslateProps> = ({ id }) => (
  <Context.Consumer>{value => value.translate(id)}</Context.Consumer>
);
