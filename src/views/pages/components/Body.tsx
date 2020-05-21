import React from "react";
import { RouterComponent } from "../../../routes/RouterComponent";
import { Breadcrumb } from "./breadcrumb/Breadcrumb";

export const Body: React.FC = () => {
  return (
    <body className="AppBody">
      <Breadcrumb />
      <RouterComponent />
    </body>
  );
};
