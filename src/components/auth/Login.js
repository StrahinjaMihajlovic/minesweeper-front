import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='w-screen h-screen'>

                    <div className='flex flex-col flex-wrap w-1/2 mx-auto h-5/6 justify-center'>
                        <h1 className='mb-12'>
                            Please, log in to access the store
                        </h1>
                        <div  className='mb-12'>
                            <input placeholder='Enter your email' type='email' />
                        </div>
                        <div className='mb-12'>
                            <input placeholder='Enter your password' type='password' />
                        </div>
                        <div >
                            <input type='submit' />
                        </div>
                    </div>

            </div>
        );
    }
}

export default Login;