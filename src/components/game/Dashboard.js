import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppConfig from '../../config/AppConfig';
import GamePreview from './GamePreview';

const Dashboard = (props) => {
    const [games, setGames] = useState(false);

    useEffect(() => {getGames(setGames)}, []);

    return (
        <div>
            <h1 className='text-6xl mt-4 mb-12'>Browse minesweep games</h1>
            <div className='flex justify-center border-t-4 p-8'>
                {games ? games : 'loading games'}
            </div>
        </div>
    );
}

function getGames (setGames) {
    axios.get(AppConfig.getState().backUrl + '/game').then(response => {
        let games = [];
        response.data.data.forEach(element => {
            games.push(<GamePreview key={element.id} game={element} />);
        })
        setGames(games);
    }); 
}

export default Dashboard;