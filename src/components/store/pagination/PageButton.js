import React from 'react';

class PageButton extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    } 

    onChange(event) {
        this.props.onChange(event);
    }
    
    render() {
        return (
            <div>
                <button value={this.props.page} className={'mx-3 rounded w-9 h-9 place-items-center ' + this.props.currColor} onClick={this.onChange}>{this.props.page}</button>
            </div>
        );
    }
}

export default PageButton;