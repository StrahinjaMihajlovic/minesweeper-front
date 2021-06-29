import React, { useState } from 'react';

const Field = (props) => {
    const [clicked, setClicker] = useState(true);
    const [fieldValue, setFieldValue] = useState();

    function handleClick() {
        if(!clicked) {
            setClicker(true);
        }
    }

    return (
        <div className='flex-grow p-1 border-2 border-blue-300 w-0'>
            <div className='border-2 h-full w-full' onClick={handleClick}>
                <p className='mb-5'>Field number {props.data.field_number}</p>
                <span className='align-middle inline-block'>{clicked ? props.data.contains : 'not clicked'}</span>
            </div>
        </div>
    );
}

export default Field;