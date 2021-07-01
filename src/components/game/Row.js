import React, { useState } from 'react';
import Field from './Field';
import FieldBuilder from './FieldBuilder';
const Row = (props) => {
    return (<div className='flex'>{renderFields(props.rowSize, props.data, props.fieldclick)}</div>);
}


function renderFields(rowSize, data, action) {
    let fields = [];
    for(let i = 1; i <= +rowSize; i++) {
        let fieldNumber = `${i}`;
        let builder = new FieldBuilder();
        fields.push(<Field key={fieldNumber} data={builder.buildForGame(data[i-1].id, fieldNumber, data[i-1].contains, action)}/>);
    }

    return fields;
}

export default Row;