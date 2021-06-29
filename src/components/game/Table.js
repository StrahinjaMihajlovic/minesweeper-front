import React, { useEffect, useState } from 'react';
import Row from './Row';
import '../assets/game/tableAssets.css';
import axios from 'axios';
import AppConfig from '../../config/AppConfig';
const Table = (props) => {
    const [rows, setRows] = useState('loading...');
    useEffect(() => {returnFieldsFromApi(setRows)}, []);

    return (<div className='grid grid-cols-1' id='gameTable'>{rows}</div>);
};

async function returnFieldsFromApi(setRows) {
    let result = await axios.get(AppConfig.getState().backUrl + '/game/101').then(response => {
        let result = renderRows(response.data);
        setRows(result);
    });

    
}

function renderRows(data) {
    let size = data.size.match(/\d+/g);
    let rows = [];
    for(let i = 1; i <= +size[0]; i++) {
        let rowValue = `${i}`;
        console.log(Object.values(data.fields));
        let rowApi = Object.values(data.fields).splice((i-1)*size[1], size[1]);
        rows.push(<Row key={rowValue} value={rowValue} rowSize={size[1]} data={rowApi}/>);
    }

    return rows;
}

export default Table;