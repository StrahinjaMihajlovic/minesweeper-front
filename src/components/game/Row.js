import React, { useState } from 'react';
import Field from './Field';

const Row = (props) => {
    const [fields, setFields] = useState(renderFields(props.rowSize, props.data));

    return (<div className='flex'>{fields}</div>);
}


function renderFields(rowSize, data) {
    let fields = [];
    for(let i = 1; i <= +rowSize; i++) {
        let fieldNumber = `${i}`;
        fields.push(<Field key={fieldNumber} value={fieldNumber} data={data[i - 1]}/>);
    }

    return fields;
}

export default Row;