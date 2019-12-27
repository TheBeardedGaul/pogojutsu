import React from "react";
import { IInjectedTranslateProps, Diff } from "./interfaces";
import Context from "./context";

// HOC pour injecter une méthode translate dans les props d'un composant
/* Exemple :
    class Button extends React.Component {
      render() {
        const { translate } = this.props
        return <input type="button" value={translate('button')} {...props} />
      }
    }
    export default injectTranslate(Button)
*/
export function injectTranslate<Props extends IInjectedTranslateProps>(
  Component: React.ComponentType<Props>
): React.FC<Diff<Props, IInjectedTranslateProps>> {
  return props => (
    <Context.Consumer>
      {value => <Component translate={value.translate} {...props as Props} />}
    </Context.Consumer>
  );
}
