import axios from 'axios';
import React, { useState } from 'react';
import AppConfig from '../../config/AppConfig';
import Field from './Field';
import FieldBuilder from './FieldBuilder';

const GameCreation = (props) => {
    const [isCreated, setIsCreated] = useState(false);
    const [xNumber, setXNumber] = useState(5);
    const [yNumber, setYNumber] = useState(5);
    //fils the bombs object with array of bombs at specific positions. The array imitates displayed table
    const [bombs, setBombs] = useState({bombs: Array(5).fill().map(() => { return Array(5).fill(false) } ) });
    return (
        <div>
            <button className='inline-block' onClick={() => {sendRequestForCreation(xNumber, yNumber, bombs.bombs.flat(), setIsCreated)}}><h1 className='pt-6 '>Create a new game</h1></button>
            {isCreated ?<p className='text-green-700'>The game has been successfully created!</p> : ''}
            <div>
                <p className='my-12'>Enter size of the table axises</p>
                <div id='axis-control' className='flex justify-center my-10'>
                    <label htmlFor='x-axis'>X axis</label>
                    <input value={xNumber} className='border-2  mx-6' type='number' name='x-axis' onChange={ event => {
                            setXNumber(event.target.value);
                            
                        }}/>
                    <label htmlFor='y-axis'>Y axis</label>
                    <input value={yNumber} className='border-2 mx-6' type='number' name='y-axis' onChange={event => {
                            let newFields = bombs.bombs;
                            setYNumber(event.target.value);
                            if(newFields.length < parseInt(event.target.value)) {
                                
                                newFields[event.target.value - 1] = Array(xNumber).fill(false);
                                setBombs({bombs: newFields});
                            }
                            
                        }}/>
                </div>
            </div>
            <div>
            {generateFields(xNumber, yNumber, bombs, setBombs)}
            </div>
        </div>
    );
}

function sendRequestForCreation(x, y, bombs, setIsCreated) {
    axios.post(AppConfig.getState().backUrl + '/game/create', {x: x, y: y, bombs: bombs}).then(response => {
        setIsCreated(true);
    }).catch(err => {
        'error'; //TODO implement error handling
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

async function setSize() {

}

export default GameCreation;