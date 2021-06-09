import axios from 'axios';
import React from 'react';
import AppConfig from '../../config/AppConfig.js';

class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {connected: false};
    }

    isLoggedIn() {
        axios.get(AppConfig.backUrl + '/test').then(response => {
            AppConfig.isLoggedIn = response.data.result.includes('hello');
            this.setState({connected: true});
        }).catch(error => {
            console.log(error);
        });
    }
}

export default Authorization;