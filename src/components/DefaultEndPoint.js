import axios from 'axios';
import Authorization from './auth/Authorization.js'
import AppConfig from '../config/AppConfig.js';
import Login from './auth/Login.js';
import Loader from './Loader.js';
import RenderPageFromUrl from './RenderPageFromUrl.js'


class DefaultEndPoint extends Authorization {
    

    constructor(props) {
        super(props);
        this.checkIfGuest = this.checkIfGuest.bind(this);
    }



    renderIfGuest() {
        return (
            <Login  />
        );
    }

    checkIfGuest() {
        if(AppConfig.isLoggedIn) {
            return(
                <RenderPageFromUrl />
                
            );
        } 

        return(
            <this.renderIfGuest />
        );
    }

    componentDidMount() {
        this.isLoggedIn();
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