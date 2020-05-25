import React from "react";
import { useI18n } from "./hooks";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

const langs = {
  en: "English",
  es: "Español",
  fr: "Français",
};

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="languageButtonContainer">
      <Select
        labelId="selectLanguage"
        id="selectLanguage"
        value={lang}
        onChange={(event) => setLang(event.target.value as "fr" | "en" | "es")}
      >
        {Object.keys(langs).map((langKey: string) => (
          <MenuItem className="TextSelect" value={langKey}>
            {(langs as any)[langKey]}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
