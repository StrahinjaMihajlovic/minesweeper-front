import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GamePreview = (props) => {
    return (
        <div className={props.game.user_played ? 'border-green-500 p-4 border-4 rounded-full mx-8' : 'p-4 border-4 rounded-full mx-8'}>
            <p className='mx-4 text-green-500 font-bold'>{props.game.user_played ? 'You have played this game!' : ''}</p>
            <h3>{props.game.size_x}x{props.game.size_y}</h3>
            <p>Created at {props.game.created_at} by the user </p>
            <Link to={'/game/' + props.game.id}><button className='bg-blue-300 rounded-full px-1 py-2'>Play this game!</button></Link>
        </div>
    );
}

export default GamePreview;