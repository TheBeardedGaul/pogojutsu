import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from '@material-ui/core/Link';
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemIcon } from "@material-ui/core";

export const FooterComponent: React.FC = () => {
    return (
        <footer className="AppFooter">
          <div className="FooterCredits">
              <ListItem>
                <p>
                  Data from<a className="AppLink" href="https://pvpoke.com">PvPoke.com</a><a className="AppLink" href="https://github.com/pvpoke/pvpoke">https://github.com/pvpoke/pvpoke </a>
                </p>
              </ListItem>
              <ListItem>
                Images from<a className="AppLink PaddingRight" href="https://pokeapi.co/" >PokéAPI</a> & <a className="AppLink" href="https://thesilphroad.com/" >thesilphroad.com</a>
              </ListItem>
              <Link href="#">
              <ListItem>
                  <ListItemIcon>
                    <TwitterIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="@PogoJutsu" color="primary" />
              </ListItem>
              </Link>
          </div>
          <div className="FooterBottom">
            © 2019 PogoJutsu
          </div>
        </footer>
    );
}