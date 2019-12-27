import React from "react";
import { IContextValue } from "./interfaces";

export default React.createContext<IContextValue>({
  lang: "en",
  translate: (id: string) => `⚠ ${id}`,
  setLang: (_: string) => {}
});
