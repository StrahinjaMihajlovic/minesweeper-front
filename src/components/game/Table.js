import React, { useEffect, useState } from 'react';
import Row from './Row';
import '../assets/game/tableAssets.css';
import axios from 'axios';
import AppConfig from '../../config/AppConfig';

let actionOpenedField;

const Table = (props) => {
    const [rows, setRows] = useState('loading...');
    const [shouldUpdate, setShouldUpdate] = useState(-1);

    actionOpenedField = (id) => {openField(id, setShouldUpdate)}
    useEffect(() => {updateTable(setRows)}, [shouldUpdate]);
    //debugger;
    return (<div className='grid grid-cols-1' id='gameTable'>{rows}</div>);
};

function openField(id, setShouldUpdate) {
    axios.post(AppConfig.getState().backUrl + '/game/open/' + id).then(() => {
        setShouldUpdate(id);
    });
}

async function updateTable(setRows) {
    let result = await axios.get(AppConfig.getState().backUrl + '/game/101').then(response => {
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
    return rows;
}

export default Table;