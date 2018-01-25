import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render(){
        if(!this.props.activeBook){
            return(<div className='col-md-8'> <h3>Select a book to see the details</h3></div>);
        }
        return(
            <div className='col-md-8'>
                <h3>Details for the Book</h3>
                <div>Title:{this.props.activeBook.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        activeBook:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);