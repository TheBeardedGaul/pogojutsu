import React from "react";
import { Meta } from "./Meta";
import { Translate } from "../i18n";
import { Select, MenuItem } from "@material-ui/core";
import "./sass/MetaSwitcher.scss";

export interface MetaSwitcherProps {
  meta: Meta;
  setMetaFct: (meta: Meta) => void;
}

export const MetaSwitcher: React.FC<MetaSwitcherProps> = ({
  meta,
  setMetaFct,
}) => {
  return (
    <Select
      className="TextSelect"
      labelId="selectMeta"
      id="selectMeta"
      value={meta}
      onChange={(event) => setMetaFct(event.target.value as Meta)}
    >
      <MenuItem className="TextSelect" value={Meta.GoBattleLeague}>
        {<Translate id={`metas.${Meta.GoBattleLeague}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Premier}>
        {<Translate id={`metas.${Meta.Premier}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Catacomb}>
        {<Translate id={`metas.${Meta.Catacomb}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Ferocious}>
        {<Translate id={`metas.${Meta.Ferocious}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Forest}>
        {<Translate id={`metas.${Meta.Forest}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Rose}>
        {<Translate id={`metas.${Meta.Rose}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Sinister}>
        {<Translate id={`metas.${Meta.Sinister}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Sorcerous}>
        {<Translate id={`metas.${Meta.Sorcerous}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Timeless}>
        {<Translate id={`metas.${Meta.Timeless}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Toxic}>
        {<Translate id={`metas.${Meta.Toxic}`} />}
      </MenuItem>
      <MenuItem className="TextSelect" value={Meta.Voyager}>
        {<Translate id={`metas.${Meta.Voyager}`} />}
      </MenuItem>
    </Select>
  );
};
