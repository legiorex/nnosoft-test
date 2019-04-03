// Core
import React from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

// Components
import Title from '../Title';

import styles from "./styles.module.css";

class Dashboard extends React.Component {
    renderArtistList () {
        const { subject } = this.props;

        return this.props.arts.map((item) => (

            <NavLink
                activeClassName = { styles['active-artist-row'] }
                className = { styles['artist-row'] }
                key = { item._id }
                to = { `/${subject}/${item._id}` }>
                <div
                    className = { styles['artist-avatar'] }
                    style = { {
                        backgroundImage: `url(${item.photo})`,
                    } }
                />
                <Title title = { item.title ? item.title : `${item.firstName} ${item.lastName}` } />

            </NavLink>
        ));
    }

    renderSpotLight () {
        const props = this.props;
        const selectedArtistId = props.match.params && props.match.params.artId;

        if (!selectedArtistId) {
            return null;
        }

        const artistInSpotlight = props.arts.find(
            (art) => art._id === selectedArtistId
        );

        if (!artistInSpotlight) {
            return null;
        }

        return (
            <div className = { styles.spotlight }>
                <div
                    className = { styles['spotlight-img'] }
                    style = { {
                        backgroundImage: `url(${artistInSpotlight.photo})`,
                    } }
                />
                <div className = { styles['spotlight-label'] }>
                    { artistInSpotlight.title ?
                        artistInSpotlight.title :
                        `${artistInSpotlight.firstName} ${artistInSpotlight.lastName}` }
                </div>
            </div>
        );
    }
    render () {
        const { subject } = this.props;

        return (
            <div className = { styles.dashboard }>
                <div>
                    <h3 className = { styles.header }>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
                    {this.renderArtistList()}
                </div>
                {this.renderSpotLight()}
            </div>
        );
    }

}

export default withRouter(Dashboard);
