/* eslint-disable react/jsx-sort-props */
// Core
import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

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
                        <Route component = { ArtistsPage } path = '/artists/:artId*' />
                        <Route component = { ArtworksPage } path = '/artworks/:artId*' />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
