import React from 'react';
import './assets/loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div className='h-screen flex flex-col items-center justify-center'>
            <div className='loader animate-spin bg-no-repeat'> 
            </div>
            <h3 className=''>Loading...</h3>
            </div>
        );
    }
}

export default Loader;