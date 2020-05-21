import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import { Route, MemoryRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Translate } from "../../../../i18n";

export const Breadcrumb: React.FC = () => {
  const history = useHistory();
  let pathnames = history.location.pathname.split("/").filter((x) => x);

  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <Route>
        <div className="breadcrumbs">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link href="/home">
              <Translate id="home" />
            </Link>
            {pathnames.map((element, index) => {
              if (index === 0 && element !== "home") {
                return (
                  <Link href={`/${element}/${pathnames[1]}`}>
                    <Translate id="ranking" />
                  </Link>
                );
              } else if (index === 2) {
                return (
                  <Link
                    href={`/${pathnames[0]}/${pathnames[1]}/${pathnames[2]}`}
                  >
                    Pokemon
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </Breadcrumbs>
        </div>
      </Route>
    </MemoryRouter>
  );
};
