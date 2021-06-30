import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Table from './Table';

const Game = (props) => {
    const [size, setSize] = useState('5x5');

    return (
    <div className='w-screen h-screen'> 
    <Switch>
        <Route exact path='/game'>
            <Dashboard />
        </Route>
        <Route path='/game/:id'>
            <Table tableSize={size}/>
        </Route>
    </Switch>
    </div>
    );
}

export default Game;