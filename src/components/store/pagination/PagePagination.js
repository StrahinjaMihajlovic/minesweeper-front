import React from 'react';
import PageButton from './PageButton';

class PagePagination extends React.Component {

    render() {
        let buttons = [];
        for(let i = 1; i <= this.props.numberOfPages; i++) {
            let isClicked = 'bg-purple-400'; //if it is not clicked, the buttons stays with this color
            if(typeof this.props.currPage !== 'undefined' && i == this.props.currPage) {
                isClicked = 'bg-purple-200' // if it is clicked, the button gets lighter
            } 
            buttons.push(<PageButton currColor={isClicked} isClicked={isClicked} key={i} page={i} onChange={this.props.onChangeButtons}/>);     
            
        }
        
        return (
            <div className='w-full flex justify-center'>
                {buttons}
            </div>
        );
    }
}

export default PagePagination;