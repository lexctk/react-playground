import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <nav className="header">
            <Link className="header__link" to="/compound-components">
                Compound Components
            </Link>
            <Link className="header__link" to="/custom-hooks">
                Custom Hooks
            </Link>
            <Link className="header__link" to="/context-api">
                Context API
            </Link>
            <Link className="header__link" to="/memo-callback">
                Memo and useCallback
            </Link>
        </nav>
    );
};

export default Header;
