import React, { useState } from 'react';

const Field = (props) => {

    return (
        <div className='flex-grow p-1 border-2 border-blue-300 w-0'>
            {props.data}
        </div>
    );
}

export default Field;