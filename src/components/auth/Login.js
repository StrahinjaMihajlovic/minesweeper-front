import axios from 'axios';
import React from 'react';
import AppConfig from "../../config/AppConfig.js";
import App from '../../App.js';
import reactDom from 'react-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: '', submited: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles login form and sends data to the login endpoint 
    handleSubmit(event) {
        event.preventDefault();
        axios.post(AppConfig.backUrl + '/login',  {
            email: event.target[0].value,
            password: event.target[1].value
        }).then(response => {

            if(response.data.access_token) {
                AppConfig.jwt = 'Bearer ' + response.data.access_token;
                axios.defaults.headers.common['Authorization'] = AppConfig.jwt;
                AppConfig.isLoggedIn = true;
                document.cookie = 'token=' + AppConfig.jwt + '; SameSite=lax';
                reactDom.render(<App />, document.getElementById('root'));
            }
        }).catch(error => {
            if(typeof error.response != 'undefined' && error.response.status == 401) {
                this.setState({status: 'Email or/and password are invalid'});
            }
        });
        
    }

    render() {
        return (
            <div className='w-screen h-screen'>

                    <div className='flex flex-col flex-wrap w-1/2 mx-auto h-5/6 justify-center'>
                        <h1 className='mb-12'>
                            Please, log in to access the store
                        </h1>
                        <form onSubmit={this.handleSubmit} method='POST' action={AppConfig.backUrl + '/login'}>
                        <div  className='mb-12'>
                            <input placeholder='Enter your email' type='email' name='email' onChange={this.handleChange}/>
                        </div>
                        <div className='mb-12'>
                            <input placeholder='Enter your password' type='password' name='password'/>
                        </div>
                        <div>
                            <p className='text-red-500'>{this.state.status}</p>
                        </div>
                        <div >
                            <input type='submit' value='Submit'/>
                        </div>
                        </form>
                    </div>

            </div>
        );
    }
}

export default Login;