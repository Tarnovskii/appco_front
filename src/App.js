import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {MainComponent} from "./components/main-component";
import {Stats} from "./containers/Stats.jsx";
import {User} from "./containers/User";

export const App = () => {
    return (
        <div className={'Application'}>
            <Switch>
                <Route exec path={'/stats/:id/:user_name'} component={User}/>
                <Route exec path={'/stats'}>
                    <Stats/>
                </Route>
                <Route exec path={'/'}>
                    <MainComponent/>
                </Route>
                <Route path={'/'}>
                    <MainComponent/>
                </Route>
            </Switch>
        </div>
    )
};
