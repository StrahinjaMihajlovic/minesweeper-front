import axios from 'axios';
import React from 'react';
import AppConfig from '../../config/AppConfig';
import Item from './Item';

class Store extends React.Component {
    constructor(props) {
        super (props);
        this.state = {page: 1, items:[]};
    }

    componentDidMount() {
        this.getItems();
    }


    getItems() {
        axios.get(AppConfig.backUrl + '/store?page=' + this.state.page).then(response => {
            if(response.data.items){
                let pulledItems = [];
                response.data.items.forEach(element => {
                    pulledItems.push(element);
                });
                this.setState({items: pulledItems});
            }
        });
    }

    renderItems() {
        let items = [];
        this.state.items.forEach(element => {
            items.push(<Item name={element.name} description={element.description} price={element.price} key={element.id}/>);
        })
        return items;
    }

    render() {
        return (
            <div id='store' className='flex'>
                <div>
                </div>
                <div className='flex flex-wrap items'>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

export default Store;