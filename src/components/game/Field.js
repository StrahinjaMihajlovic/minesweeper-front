import React, { useState } from 'react';

const Field = (props) => {
    const [clicked, setClicker] = useState(false);
    const [fieldValue, setFieldValue] = useState();

    function handleClick() {
        if(!clicked) {
            setClicker(true);
        }
    }

    return (
        <div className='flex-grow p-1 border-2 border-blue-300'>
            <div className='border-2 h-full w-full' onClick={handleClick}>
                <span className='align-middle inline-block'>{clicked ? 'clicked' : 'not clicked'}</span>
            </div>
        </div>
    );
}

export default Field;