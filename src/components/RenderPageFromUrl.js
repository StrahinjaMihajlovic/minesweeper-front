import { Switch, Route, withRouter} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./auth/Login";
import App from "../App.js"
import Registration from './auth/Registration.js';
import React from 'react';
import reactDom from 'react-dom';
import AppConfig from "../config/AppConfig";
import axios from "axios";
import Store from "./store/Store";

class RenderPageFromUrl extends React.Component {

    redirectLoogout() {
        if(this.props.history.location.pathname.includes('/logout')){
            axios.post(AppConfig.backUrl + '/logout'); 
            AppConfig.isLoggedIn = false;
            document.cookie = 'token= ; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            reactDom.render(<App />, document.getElementById('root'));
            this.props.history.push('/login');
        }
    }

    componentDidUpdate() {
        this.redirectLoogout();
    }

    renderProtectedPaths() {
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
                <Route path='/store'><Store /></Route>
                <Route exact path='/'><Login /></Route>
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