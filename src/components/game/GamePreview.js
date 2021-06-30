import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GamePreview = (props) => {
    return (
        <div className='p-4 border-4 rounded-full mx-8'>
            <h3>{props.game.size_x}x{props.game.size_y}</h3>
            <p>Created at {props.game.created_at} by the user </p>
            <Link to={'/game/' + props.game.id}><button className='bg-blue-300 rounded-full px-1 py-2'>Play this game!</button></Link>
        </div>
    );
}

export default GamePreview;