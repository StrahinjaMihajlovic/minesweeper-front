import axios from 'axios';
import React from 'react';
import AppConfig from '../../config/AppConfig.js';

class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {connected: false};
    }

    isLoggedIn() {
        axios.get(AppConfig.getState().backUrl + '/test').then(response => {
            if(response.data.result.includes('hello') && !AppConfig.getState().isLoggedIn) {
                AppConfig.dispatch({type: 'change_login_state'});
            }
            this.setState({connected: true});
        }).catch(error => {
            console.log(error);
        });
    }
}

export default Authorization;