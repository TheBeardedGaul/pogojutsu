import React, { useState } from "react";
import Context from "./context";
import {
  I18nProviderProps,
  ITranslateProps,
  IContextValue,
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
  children,
}) => {
  const [lang, setLang] = useState(defaultLang);

  if (!messages[lang]) throw new Error(`Language not found: ${lang}`);
  const value: IContextValue = {
    lang,
    translate: (id: string, values?: string[]) => {
      const keys = id.split(".");
      let node: any = messages[lang];
      keys.forEach((element: string) => {
        node = node[element];
      });
      if (values && node) {
        values.forEach((value, index) => {
          node = node.replace("${" + index + "}", value);
        });
      }
      return node || `⚠ ${id}`;
    },
    setLang,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const Translate: React.FC<ITranslateProps> = ({ id, values }) => (
  <Context.Consumer>{(value) => value.translate(id, values)}</Context.Consumer>
);
