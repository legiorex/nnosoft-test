// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Components
import NavBar from "../../NavBar";
import Dashboard from "../../Dashboard";

// Actions
import { artworksActions } from '../../../bus/artworks/actions';

const mapStateToProps = (state) => {

    return {
        artworks: state.artworks,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...artworksActions },
            dispatch
        ),
    };

};

@connect(mapStateToProps, mapDispatchToProps)

class Artworks extends Component {
    componentDidMount = () => {
        this.props.actions.fetchArtworks();
    }
    render () {
        return (
            <div>
                <NavBar />
                <Dashboard arts = { this.props.artworks } subject = { 'artworks' } />
            </div>
        );
    }
}
export default Artworks;
