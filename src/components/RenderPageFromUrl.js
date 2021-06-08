import { Switch, Route, withRouter} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./auth/Login";
import Registration from './auth/Registration.js';
import React from 'react';
import AppConfig from "../config/AppConfig";
import axios from "axios";

class RenderPageFromUrl extends React.Component {

    redirectLoogout() {
        if(this.props.history.location.pathname.includes('/logout')){
            axios.post(AppConfig.backUrl + '/logout'); 
            AppConfig.isLoggedIn = false;
            document.cookie = 'token= ; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            this.props.history.push('/login');
        }
    }

    renderProtectedPaths() {
       this.redirectLoogout();
        return (
            <React.Fragment>
                <Route path='/'>Hello</Route>
                <Route path='/logout' />
            </React.Fragment>
        );
    }

    renderUnprotectedPaths() {
        return (
            <React.Fragment>
                <Route path='/register'><Registration/></Route>
                <Route path='/'><Login /></Route>
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

export default withRouter(RenderPageFromUrl);