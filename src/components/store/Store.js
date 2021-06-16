import React from 'react';
import DisplayItem from './DisplayItem';
import Item from './Item';

class Store extends React.Component {
    constructor(props) {
        super (props);
        this.renderItemDisplay = this.renderItemDisplay.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this.setDisplayState = this.setDisplayState.bind(this);
        this.state = {displayItem: false, item: ''};
    }

    renderItemDisplay(event, itemProps) {
        this.setDisplayState();
        this.setState({item: itemProps});
    }

    setDisplayState(event) {
        this.setState({displayItem: !this.state.displayItem});
    }

    renderItems() {
        let items = [];
        this.props.items.forEach(element => {
            items.push(<Item renderDisplay={(event) => this.renderItemDisplay(event, element)} image={element.image} name={element.name} description={element.description} price={element.price} key={element.id}/>);
        })
        return items;
    }

    render() {
        return (
            <React.Fragment>
                <div className='modal'>
                    {this.state.displayItem ? <DisplayItem item={this.state.item} renderDisplay={this.setDisplayState}/> : ''}
                </div>
                {this.renderItems()}   
            </React.Fragment>
        );
    }
}

export default Store;