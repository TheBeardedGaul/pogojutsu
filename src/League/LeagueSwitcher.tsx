import React from "react";
import { League } from "./League";
import { Translate } from "../i18n";
import { Select, MenuItem } from "@material-ui/core";
import "../Meta/sass/MetaSwitcher.scss";
import { Meta } from "../Meta/Meta";

export interface LeagueSwitcherProps {
    meta: Meta;
    league: League;
    setLeagueFct: (league: League) => void;
}

export const LeagueSwitcher: React.FC<LeagueSwitcherProps> = ({meta, league, setLeagueFct}) => {

    return (
             <Select
                className="TextSelect"
                labelId="selectLeague"
                id="selectLeague"
                value={league}
                onChange={(event) =>  setLeagueFct((event.target.value as  League))}
            >
                <MenuItem className="TextSelect" value={League.Great}>{<Translate id={`leagues.${League.Great}`} />}</MenuItem>
                {meta === Meta.GoBattleLeague && <MenuItem className="TextSelect" value={League.Ultra}>{<Translate id={`leagues.${League.Ultra}`} />}</MenuItem>}
                {meta === Meta.GoBattleLeague && <MenuItem className="TextSelect" value={League.Master}>{<Translate id={`leagues.${League.Master}`} />}</MenuItem>}
            </Select>
    );
}