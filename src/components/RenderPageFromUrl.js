import { Switch, Route, withRouter} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./auth/Login";
import App from "../App.js"
import Registration from './auth/Registration.js';
import React from 'react';
import reactDom from 'react-dom';
import AppConfig from "../config/AppConfig";
import axios from "axios";
import StoreIndex from "./store/StoreIndex";
import Game from "./game/Game";

class RenderPageFromUrl extends React.Component {

    redirectLoogout() {
        if(this.props.history.location.pathname.includes('/logout')){
            axios.post(AppConfig.getState().backUrl + '/logout'); 
            AppConfig.dispatch({type: 'change_login_state'});
            document.cookie = 'token= ; expires=Thu, 01 Jan 1970 00:00:00 GMT'; //TODO pull those parameters as global consts somewhere
            reactDom.render(<App />, document.getElementById('root'));
            this.props.history.push('/login');
        }
    }

    componentDidUpdate() {
        this.redirectLoogout();
    }

    renderProtectedPaths() {
        return (
            <Switch>
                
                <Route path='/game'> <Game /> </Route>
                <Route path='/logout' />
                <Route path='/'> <StoreIndex /> </Route>
            </Switch>
        );
    }

    renderUnprotectedPaths() {
        return (
            <Switch>
                
                <Route path='/register'> <Registration/> </Route>
                <Route path='*'> <Login /> </Route>
            </Switch>
        );
    }

    render() {
        return (
            <React.Fragment>
                {AppConfig.getState().isLoggedIn ? this.renderProtectedPaths() : this.renderUnprotectedPaths()}
            </React.Fragment>
        );
    } 
}

export default withRouter(RenderPageFromUrl);