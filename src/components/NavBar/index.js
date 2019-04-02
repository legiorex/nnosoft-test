import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

class NavBar extends React.Component {
    _renderLink (page, i = -1) {
        return (
            <NavLink
                activeClassName = { styles["active-link"] }
                className = { styles.link }
                key = { i }
                to = { `/${page}` }>
                {page}
            </NavLink>
        );
    }
    render () {
        const pages = ["notes", "artists", "artworks"];

        return (
            <div className = { styles["nav-bar"] }>
                {pages.map(this._renderLink)}
            </div>
        );
    }
}

export default withRouter(NavBar);
