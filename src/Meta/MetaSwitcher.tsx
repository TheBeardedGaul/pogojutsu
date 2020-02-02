import React from "react";
import { Meta } from "./Meta";
import classNames from "classnames";

export interface MetaSwitcherProps {
    meta: Meta;
    setMetaFct: (meta: Meta) => void;
}

export const MetaSwitcher: React.FC<MetaSwitcherProps> = ({meta, setMetaFct}) => {
    const getClassNames = (selected: boolean) => {
        const componentClasses = classNames({
            "languageButton": true,
            "selectedButton": selected
        });
    
        return componentClasses;
    }
    return (
        <div className="languageButtonContainer">
            <div className={getClassNames(meta === Meta.GoBattleLeague)}
                onClick={() => setMetaFct(Meta.GoBattleLeague)}
            >
                {Meta.GoBattleLeague}
            </div>
            <div className={getClassNames(meta === Meta.Rose)}
                onClick={() => setMetaFct(Meta.Rose)}
            >
                {Meta.Rose}
            </div>
        </div>
    );
}