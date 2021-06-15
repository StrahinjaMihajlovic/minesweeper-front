import React from 'react';
import StoreCategoryOption from './StoreCategoryOption';

class StoreOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }

    //handles use changing the sort method
    handleChange(event) {
        this.props.onSortChange(event);
    }

    render() {
        return (
            <div>
                <h4>Sort items by</h4>
                <select id='sort-option' defaultValue='created_at' onChange={this.handleChange}>
                    <option value='created_at-desc'>Newer</option>
                    <option value='name'>Name</option>
                    <option value='price'>Price</option>
                    <option value='created_at'>Old</option>
                </select>
                <h4>Filter items by category:</h4>
                <StoreCategoryOption onCategoryChange={this.props.onCategoryChange}/>
            </div>
        );
    }
}

export default StoreOptions;