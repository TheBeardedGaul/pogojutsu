import React from "react";
import { useI18n } from "./hooks";
import classNames from "classnames";

const langs = {
  en: "English",
  es: "Español",
  fr: "Français"
};

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useI18n();

  const getClassNames = (selected: boolean) => {
    const componentClasses = classNames({
        "languageButton": true,
        "selectedButton": selected
    });

    return componentClasses;
  }
  
  return (
    <div className="languageButtonContainer">
      {Object.keys(langs).map((langKey: string) => (
        <div
          className={getClassNames(lang === (langKey as  "fr" | "en" | "es") )}
          key={langKey}
          // style={{ borderStyle: lang === langKey ? "inset" : "outset" }}
          onClick={() => setLang((langKey as  "fr" | "en" | "es"))}
        >
          {(langs as any)[langKey]}
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
