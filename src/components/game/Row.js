import React, { useState } from 'react';
import Field from './Field';

const Row = (props) => {
    return (<div className='flex'>{renderFields(props.rowSize, props.data, props.fieldclick)}</div>);
}


function renderFields(rowSize, data, action) {
    let fields = [];
    for(let i = 1; i <= +rowSize; i++) {
        let fieldNumber = `${i}`;
        fields.push(<Field key={fieldNumber} value={fieldNumber} data={data[i - 1]} fieldclick={action}/>);
    }

    return fields;
}

export default Row;