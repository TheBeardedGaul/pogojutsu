import React from "react";
import LanguageSwitcher from "../../../i18n/LanguageSwitcher";

export const Header: React.FC = () => {
    return (
        <header className="AppHeader">
            <div className="AppLogo">
            <h1>
                PogoJutsu
            </h1>
            </div>
            <div />
            <div />
            <div />
            <LanguageSwitcher />
        </header>
    )
}