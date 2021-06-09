import React from 'react';
import axios from 'axios';
import AppConfig from '../../config/AppConfig.js';
import {withRouter} from "react-router-dom/cjs/react-router-dom.min";
class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {status: '', submited: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(AppConfig.backUrl + '/register',  {
            email: event.target[0].value,
            name: event.target[1].value,
            password: event.target[2].value
        }).then(response => {
            if(response.data.result === 'success') {
                this.props.history.push('/login');
            }
        }).catch(error => {
            console.log(error);
        });
        
    }

    render() {
        return (
            <div className='w-screen h-screen'>
                    <div className='flex flex-col flex-wrap w-1/2 mx-auto h-5/6 justify-center'>
                        <h1 className='mb-12'>
                            Fill in the form below to become our user
                        </h1>
                        <form onSubmit={this.handleSubmit} method='POST' action={AppConfig.backUrl}>
                        <div  className='mb-12'>
                            <input placeholder='Enter your email' type='email' name='email'/>
                        </div>
                        <div className='mb-12'>
                            <input placeholder='Enter your name' type='text' name='name'/>
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

export default withRouter(Registration);