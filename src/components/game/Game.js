import React, { useState } from 'react';
import Table from './Table';

const Game = (props) => {
    const [size, setSize] = useState('5x5');

    return (
    <div className='w-screen h-screen'> 
        <Table tableSize={size}/>
    </div>
    );
}

export default Game;