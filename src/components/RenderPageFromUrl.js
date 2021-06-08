import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./auth/Login";
import Registration from './auth/Registration.js';
import React from 'react';
import AppConfig from "../config/AppConfig";
import App from "../App";

class RenderPageFromUrl extends React.Component {


    renderProtectedPaths() {
        return (
            <React.Fragment>
                <Route path='/'>Hello</Route>
                <Route path='/logout' >{}</Route>
            </React.Fragment>
        );
    }

    renderUnprotectedPaths() {
        return (
            <React.Fragment>
                <Route path='/register'><Registration/></Route>
                <Route path='/login'><Login /></Route>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Switch>
                {AppConfig.isLoggedIn ? this.renderProtectedPaths() : this.renderUnprotectedPaths()}
            </Switch>
        );
    } 
}

export default RenderPageFromUrl;