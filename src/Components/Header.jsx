import React from "react";
import logo from "./logo.png";

const Header = () => {
    return (
        <header className="header">

            <nav>
                <h2>Reminder</h2>
                <div className="logo">
                    <img src={logo} alt="Todoist"></img>

                </div>
            </nav>
        </header>
    );
};

export default Header;