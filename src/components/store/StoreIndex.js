import React from 'react';
import Store from './Store';
import StoreOptions from './StoreOptions';
import axios from 'axios';
import AppConfig from '../../config/AppConfig';
class StoreIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sort: 'created_at', items: [], page: 1};
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }

    //Pulls items from the api and sets them as state, after finishing set state from handleSortChange
    //function
    async getItems(stateUpdateFunction, order) {
        await stateUpdateFunction;
        axios.get(AppConfig.getState().backUrl + '/store?page=' + this.state.page + '&sort=' + this.state.sort + '&order=' + order).then(response => {
            if(response.data.items){
                let pulledItems = [];
                response.data.items.forEach(element => {
                    pulledItems.push(element);
                });
                this.setState({items: pulledItems});
            }
        });
    }

    // Handles change from storeOption
    handleSortChange(event) {
        let value = event.target.value;
        let order = '';
        if(value.includes('desc')) {
            order = 'desc';
            value = value.replace('-desc', '');
        }
        
        this.getItems(this.setState({sort: value}), order);
    }

    render() {
        return (
            <div id='store-wrapper' className='flex mt-16 border-t-8'>
                <div className='w-1/5 border-r-4 mx-2'>
                    <StoreOptions onSortChange={this.handleSortChange}/> 
                </div>
                <div className='flex flex-wrap border-l-4' id='items'>
                    <Store sort={this.state.sort} items={this.state.items}/>
                </div>
            </div>
        );
        
    }
}

export default StoreIndex;