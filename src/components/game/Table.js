import React, { useState } from 'react';
import Row from './Row';
import '../assets/game/tableAssets.css';
const Table = (props) => {
    const [rows, setRows] = useState(renderRows(props.tableSize));

    return (<div className='grid grid-cols-1' id='gameTable'>{rows}</div>);
};

function renderRows(rowSize) {
    let size = rowSize.match(/\d+/g);
    let rows = [];
    for(let i = 1; i <= +size[0]; i++) {
        let rowValue = `${i}`;
        rows.push(<Row key={rowValue} value={rowValue} rowSize={size[1]}/>);
    }

    return rows;
}

export default Table;