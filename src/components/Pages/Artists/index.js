// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Components
import NavBar from "../../NavBar";
import Dashboard from "../../Dashboard";

// Actions
import { artistsActions } from '../../../bus/artists/actions';

// consider this data arrived from the API
// <donotmodify>

const mapStateToProps = (state) => {

    return state;
};

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            { ...artistsActions },
            dispatch
        ),
    };

};

const artists = [
    { _id: "1", firstName: "Annie", lastName: "Walker" },
    { _id: "2", firstName: "Lynda", lastName: "Dubovich" },
    { _id: "3", firstName: "Jessica", lastName: "Gonsalez" },
    { _id: "4", firstName: "Kate", lastName: "Banksy" }
];
// </donotmodify>

@connect(mapStateToProps, mapDispatchToProps)

class Artists extends Component {

    render () {
        return (
            <div>
                <NavBar />
                <Dashboard artists = { artists } />
            </div>
        );
    }

}
export default Artists;
