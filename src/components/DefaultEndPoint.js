import axios from 'axios';
import React from 'react';
import App from '../config/App.js';
import Login from './auth/Login.js';
import Loader from './Loader.js';



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
        if(App.user == 'Guest') {
            return(
                <this.renderIfGuest />
            );
        } 

        return(
            'hello'
        );
    }

    componentDidMount() {
        axios.get(App.backUrl + '/test').then(response => {
            response.data.result.includes('token') ? App.user = 'Guest' : App.user = response.data.result;
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