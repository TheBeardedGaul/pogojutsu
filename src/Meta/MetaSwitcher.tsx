import React from "react";
import { Meta } from "./Meta";
import classNames from "classnames";
import { Translate } from "../i18n";
import { Select, MenuItem } from "@material-ui/core";
import "./sass/MetaSwitcher.scss";

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
             <Select
                className="MetaSelect"
                labelId="selectMeta"
                id="selectMeta"
                value={meta}
                onChange={(event) =>  setMetaFct((event.target.value as  Meta))}
            >
                <MenuItem className="MetaSelect" value={Meta.GoBattleLeague}>{<Translate id={`metas.${Meta.GoBattleLeague}`} />}</MenuItem>
                <MenuItem className="MetaSelect" value={Meta.Rose}>{<Translate id={`metas.${Meta.Rose}`} />}</MenuItem>
                <MenuItem className="MetaSelect" value={Meta.Toxic}>{<Translate id={`metas.${Meta.Toxic}`} />}</MenuItem>
            </Select>
            {/* <div className={getClassNames(meta === Meta.GoBattleLeague)}
                onClick={() => setMetaFct(Meta.GoBattleLeague)}
            >
                {<Translate id={`metas.${Meta.GoBattleLeague}`} />}
            </div> */}
            {/* <div className={getClassNames(meta === Meta.Rose)}
                onClick={() => setMetaFct(Meta.Rose)}
            >
                {<Translate id={`metas.${Meta.Rose}`} />}
            </div>
            <div className={getClassNames(meta === Meta.Toxic)}
                onClick={() => setMetaFct(Meta.Toxic)}
            >
                {<Translate id={`metas.${Meta.Toxic}`} />}
            </div> */}
        </div>
    );
}