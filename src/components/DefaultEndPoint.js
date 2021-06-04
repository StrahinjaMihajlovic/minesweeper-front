import React from 'react';
import Login from './auth/Login.js';

var currentUser = React.createContext('');

class DefaultEndPoint extends React.Component {
    constructor(props) {
        super(props)
    }

    renderIfGuest() {
        return (
            <Login  />
        );
    }

    checkIffGuest() {
        return true;
    }

    render() {
        return (
            <this.renderIfGuest />
        );
    }
}

export default DefaultEndPoint;