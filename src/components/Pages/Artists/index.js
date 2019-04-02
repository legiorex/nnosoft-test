// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Components
import NavBar from "../../NavBar";
import Dashboard from "../../Dashboard";

// Actions
import { artistsActions } from '../../../bus/artists/actions';

const mapStateToProps = (state) => {

    return {
        artists: state.artists,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...artistsActions },
            dispatch
        ),
    };

};

@connect(mapStateToProps, mapDispatchToProps)

class Artists extends Component {

    componentDidMount = () => {
        this.props.actions.fetchArtists();
    }

    render () {
        return (
            <div>
                <NavBar />
                <Dashboard artists = { this.props.artists } />
            </div>
        );
    }

}
export default Artists;
