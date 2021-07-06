import React, { useEffect, useState } from 'react';
import Row from './Row';
import '../assets/game/tableAssets.css';
import axios from 'axios';
import AppConfig from '../../config/AppConfig';
import { useParams } from 'react-router-dom';

let actionOpenedField;


const Table = (props) => {
    const [rows, setRows] = useState('loading...');
    const [shouldUpdate, setShouldUpdate] = useState(-1);
    let gameId = useParams();
    actionOpenedField = (id) => {openField(id, setShouldUpdate)}
    useEffect(() => {updateTable(setRows, gameId.id)}, [shouldUpdate]);
    //debugger;
    return (<div className='grid grid-cols-1' id='gameTable'>{rows}</div>);
};

// sends request when the user clicks on a field
function openField(id, setShouldUpdate) {
    axios.post(AppConfig.getState().backUrl + '/game/open/' + id).then(() => {
        setShouldUpdate(id);
    });
}
// TODO find a better way of handling update of the table as the current is relatevly slow 
// updates whole table when the user opens a field
async function updateTable(setRows, game) {
    let result = await axios.get(AppConfig.getState().backUrl + '/game/' + game).then(response => {
        let result = renderRows(response.data);
        return result;
    });
    setRows(result);
}

function renderRows(data) {
    let size = data.size.match(/\d+/g);
    let rows = [];
    for(let i = 1; i <= +size[0]; i++) {
        let rowValue = `${i}`;
        let rowApi = Object.values(data.fields).splice((i-1)*size[1], size[1]);
        rows.push(<Row key={rowValue} value={rowValue} rowSize={size[1]} data={rowApi} fieldclick={actionOpenedField}/>);
    }
    debugger;
    return rows;
}

export default Table;