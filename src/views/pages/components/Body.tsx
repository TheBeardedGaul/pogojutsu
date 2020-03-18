import React from "react";
import { RouterComponent } from "../../../routes/RouterComponent";

export const Body: React.FC = () => {
    return (
        <body className="AppBody">
            <RouterComponent />
        </body>
    );
}