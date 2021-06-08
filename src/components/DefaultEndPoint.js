import axios from 'axios';
import React from 'react';
import AppConfig from '../config/AppConfig.js';
import Login from './auth/Login.js';
import Loader from './Loader.js';
import RenderPageFromUrl from './RenderPageFromUrl.js'


class DefaultEndPoint extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {connected: false};
        this.checkIfGuest = this.checkIfGuest.bind(this);
    }



    renderIfGuest() {
        return (
            <Login  />
        );
    }

    checkIfGuest() {
        if(AppConfig.user == 'Guest') {
            return(
                <this.renderIfGuest />
            );
        } 

        return(
            <RenderPageFromUrl />
        );
    }

    componentDidMount() {

        axios.get(AppConfig.backUrl + '/test').then(response => {
            if(response.data.result.includes('hello')) {
                AppConfig.user = response.data.result;
            } else {
                AppConfig.user = 'Guest';
            }
            this.setState({connected: true});
        });
    }

    render() {
        let display;
        if(this.state.connected) {
            display = <this.checkIfGuest />
        } else {
            display = <Loader />
        }
        return (
            display
        );
    }
}

export default DefaultEndPoint;