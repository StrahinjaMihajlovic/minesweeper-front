import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./auth/Login";
import DefaultEndPoint from "./DefaultEndPoint";
import React from 'react';

class RenderPageFromUrl extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/register'>Hi</Route>
                <Route path='/login'><Login /></Route>
                <Route path='/'>Hello</Route>
            </Switch>
        );
    } 
}

export default RenderPageFromUrl;