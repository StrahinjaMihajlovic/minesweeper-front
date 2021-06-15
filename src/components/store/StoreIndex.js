import React from 'react';
import Store from './Store';
import StoreOptions from './StoreOptions';
import axios from 'axios';
import AppConfig from '../../config/AppConfig';
import PagePagination from './pagination/PagePagination';

class StoreIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sort: 'created_at', items: [], page: 1, pages: 1, category: ''};
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }

    //Pulls items from the api and sets them as state, after finishing set state operation from handleSortChange
    //function
    async getItems(stateUpdateFunction, order) {
        await stateUpdateFunction;
        axios.get(AppConfig.getState().backUrl + '/store?page=' + this.state.page 
        + '&sort=' + this.state.sort + '&order=' + order + '&category=' + this.state.category).then(response => {
            if(response.data.items){
                let pulledItems = [];
                response.data.items.forEach(element => {
                    pulledItems.push(element);
                });
                this.setState({items: pulledItems});
                this.setState({pages: response.data.pages});
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

    handlePageChange(event) {
        this.getItems(this.setState({page: event.target.value}));
    }

    handleCategoryChange(event) {
        this.getItems(this.setState({category: event.target.value}));
    }

    render() {
        return (
            <div id='store-wrapper' className='flex mt-16 border-t-8 min-h-screen'>
                <div className='w-1/5 border-r-4 mx-2'>
                    <StoreOptions onCategoryChange={this.handleCategoryChange} onSortChange={this.handleSortChange}/> 
                </div>
                <div className='flex flex-wrap border-l-4 content-start' id='items'>
                    <Store sort={this.state.sort} items={this.state.items}/>
                    <PagePagination currPage={this.state.page} numberOfPages={this.state.pages} onChangeButtons={this.handlePageChange} />
                </div>
            </div>
        );
        
    }
}

export default StoreIndex;