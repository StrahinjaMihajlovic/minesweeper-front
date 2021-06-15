import axios from 'axios';
import React from 'react';
import AppConfig from '../../config/AppConfig';

class StoreCategoryOption extends React.Component{
    constructor(props) {
        super(props);
        this.state = {categories: []};
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    componentDidMount() {
        this.getCategories();
    }

    onCategoryChange(event) {
        this.props.onCategoryChange(event);
    }

    getCategories() {
        axios.get(AppConfig.getState().backUrl + '/store/category').then(response => {
            let respondedCategories = [<option key='default' value=''>All</option>];
            response.data.categories.forEach(element => {
                respondedCategories.push(<option key={element.id} value={element.name}> {element.name} </option>);
            });
            this.setState({categories: respondedCategories});
        });
    }

    render() {
        return (
            <select onChange={this.onCategoryChange}>
                {this.state.categories}
            </select>
        );
    }
}

export default StoreCategoryOption;