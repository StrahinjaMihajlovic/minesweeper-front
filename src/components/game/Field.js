import React, { useState } from 'react';

const Field = (props) => {
    const [clicked, setClicker] = useState(true);


    return (
        <div className='flex-grow p-1 border-2 border-blue-300 w-0'>
            <div className='border-2 h-full w-full' onClick={() => {props.fieldclick(props.data.id)}}>
                <p className='mb-5'>Field number {props.data.field_number}</p>
                <span className='align-middle inline-block'>{props.data.contains}</span>
            </div>
        </div>
    );
}

export default Field;