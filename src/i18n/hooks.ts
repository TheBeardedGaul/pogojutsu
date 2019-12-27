import { useContext } from "react";
import Context from "./context";
import { ITranslate, IContextValue } from "./interfaces";

// Hook pour récupérer la méthode translate depuis un function component
/* Exemple :
    function Button(props) {
      const translate = useTranslate()
      return <input type="button" value={translate('button')} {...props} />
    }
*/
export function useTranslate(): ITranslate {
  return useI18n().translate;
}

export function useI18n(): IContextValue {
  return useContext(Context);
}
