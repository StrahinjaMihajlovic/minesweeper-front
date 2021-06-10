import React from 'react';
import Item from './Item';

class Store extends React.Component {
    constructor(props) {
        super (props);
    }

    renderItems() {
        let items = [];
        this.props.items.forEach(element => {
            items.push(<Item name={element.name} description={element.description} price={element.price} key={element.id}/>);
        })
        return items;
    }

    render() {
        return (
            <React.Fragment>
                {this.renderItems()}   
            </React.Fragment>
        );
    }
}

export default Store;