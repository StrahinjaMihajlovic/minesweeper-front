import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppConfig from '../../config/AppConfig';
import Field from './Field';
import FieldBuilder from './FieldBuilder';
import { useLayoutEffect } from 'react';

const GameCreation = (props) => {
    const [isCreated, setIsCreated] = useState(false);
    const [xNumber, setXNumber] = useState({value: 5});
    const [yNumber, setYNumber] = useState({value: 5});
    //fils the bombs object with array of bombs at specific positions. The array imitates displayed table
    const [bombs, setBombs] = useState({bombs: Array(5).fill().map(() => { return Array(5).fill(false) } ) });

    useLayoutEffect(() => {setSize(xNumber.value, yNumber.value, bombs.bombs, setBombs)}, [xNumber, yNumber]);

    return (
        <div>
            <button className='mt-6 border-4 border-purple-400 inline-block hover:bg-red-300 align-middle' onClick={() => {sendRequestForCreation(xNumber.value, yNumber.value, bombs.bombs.flat(), setIsCreated)}}>
                 <p className=' p-4'>Create a new game</p>
            </button>

            {isCreated ?<p className='text-green-700'>The game has been successfully created!</p> : ''}

            <div>
                <p className='my-12'>Enter size of the table axises</p>
                <div id='axis-control' className='flex justify-center my-10'>
                    <label htmlFor='x-axis'>X axis</label>
                    <input value={xNumber.value} className='border-2  mx-6' type='number' name='x-axis' onChange={ event => {
                            setXNumber({value: parseInt(event.target.value)});
                        }}/>
                    <label htmlFor='y-axis'>Y axis</label>
                    <input value={yNumber.value} className='border-2 mx-6' type='number' name='y-axis' onChange={async event => {
                            let newYValue = parseInt(event.target.value);
                            // calls setSize before changing yNumber state that re-renders the component. Size needs to be set before re-render
                            if(bombs.bombs.length < newYValue) { 
                                await setSize(xNumber.value, newYValue, bombs.bombs, setBombs);
                            }
                            setYNumber({value: newYValue});
                        }}/>
                </div>
            </div>
            <div>
            {generateFields(xNumber.value, yNumber.value, bombs, setBombs)}
            </div>
        </div>
    );
}

function sendRequestForCreation(x, y, bombs, setIsCreated) {
    axios.post(AppConfig.getState().backUrl + '/game/create', {x: x, y: y, bombs: bombs}).then(response => {
        setIsCreated(true);
    }).catch(err => {
        console.log(err.response.data); //TODO implement error handling
    });
}

// generates fields for a game in progress given size and bombs parameters
function generateFields(sizeX, sizeY, bombs, setBombs) {
    let rows = [];
    for(let i = 1; i <= sizeY; i++) {
        let fields = []
       for(let j = 1; j <= sizeX; j++) {
           let fieldNumber = `${i}${j}`;
           let builder = new FieldBuilder();
           fields.push(<Field key={fieldNumber} data={builder.buildForCreation(fieldNumber, bombs.bombs, plantTheMine, setBombs, j - 1, i - 1)} />);
       }
       rows.push(<div key={i} className='flex'>{fields}</div>);
    }
    return rows;
}

// plants the mine at given location
function plantTheMine(bombs, setBombs, fieldX, fieldY) {
    let newBombs = bombs;
    newBombs[fieldY][fieldX] = !newBombs[fieldY][fieldX];
    setBombs({bombs: newBombs});
}

// changes size of the bombs fields to mirror created table
async function setSize(x, y, bombs, setBombs) {
    bombs.forEach((elements, key, bombs) => {
        if(elements.length < x) { // manipulates x axis size of the table
            elements.push(Array(x - elements.length).fill(false));
        } else {
            bombs[key] = elements.slice(0, x);
        }
    });
    let length = bombs.length;
    if(length < y) { //manipulates y axis size of the table
        for(let i = 0; i < (y - length); i++) {
            bombs.push(Array(x).fill(false));
        }
    } else {
        bombs = bombs.slice(0, y);
    }
    setBombs({bombs: bombs});
}

export default GameCreation;