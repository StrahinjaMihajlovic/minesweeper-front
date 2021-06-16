import React from 'react';

class DisplayItem extends React.Component {
    render() {
        return (
        <div className='fixed z-20 inset-0 w-screen h-screen inline-block'>

            <div className='bg-gray-400 opacity-60 w-screen h-screen absolute z-0' onClick={this.props.renderDisplay}></div>

            <div className='inset-y-32 z-10 bg-white relative inline-block border-4 border-purple-300 border-opacity-60'>
                <div className='border-4 m-px border-purple-300 border-opacity-80'>
                    <div className='item-header inline-block  m-5'>
                        <div className='h-72 w-72 mx-auto my-5'>
                            <img className='h-full w-full' src={this.props.item.image} />
                        </div>
                        <h2>{this.props.item.name}</h2>
                    </div>
                    <div className='item-description my-5'>
                        <p>Description:</p>
                        <p>{this.props.item.description}</p>
                       
                    </div>
                    <h3>Price: {this.props.item.price}</h3>
                </div>
            </div>
        </div>
        );
        
    }
}

export default DisplayItem;