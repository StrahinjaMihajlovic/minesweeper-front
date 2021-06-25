import React, { useState } from 'react';
import Field from './Field';

const Row = (props) => {
    const [fields, setFields] = useState(renderFields(props.rowSize));

    return (<div className='flex'>{fields}</div>);
}


function renderFields(rowSize) {
    let fields = [];
    for(let i = 1; i <= +rowSize; i++) {
        let fieldValue = `${i}`;
        fields.push(<Field key={fieldValue} value={fieldValue}/>);
    }

    return fields;
}

export default Row;