import React from 'react';
import '../assets/items.css'
class Item extends React.Component {

    render() {
        return (
            <div className='item mx-24 space-y-3 m-2 p-4 ring-4 ring-gray-200'>
                <div className='item-header '>
                    <div className='item-image bg-no-repeat w-32 h-32 container mx-auto'/>
                    <div><h2>{this.props.name}</h2></div>
                </div>
                <div>
                    <h3 className='font-bold text-green-500'>Price: {this.props.price}</h3>
                </div>
                <div className='item-description'>
                    <p>Description of the item:</p>
                    {this.props.description}
                </div>
                
            </div>
        );
    }
}

export default Item;