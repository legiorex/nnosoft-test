// Core
import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./redux/store/configureStore";

// Components
import HomePage from "./components/Pages/Home";
import ArtistsPage from "./components/Pages/Artists";
import ArtworksPage from "./components/Pages/Artworks";
import NotesPage from "./components/Pages/Notes";

import { store } from './init/store';


class App extends Component {
    render () {
        return (
            <Provider store = { store }>
                <HashRouter>
                    <Switch>
                        <Route component = { HomePage } exact path = '/' />
                        <Route component = { NotesPage } path = '/notes' />
                        <Route component = { ArtistsPage } path = '/artists/:artistId*' />
                        <Route component = { ArtworksPage } path = '/artworks' />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
