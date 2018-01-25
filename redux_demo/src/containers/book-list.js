import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';


class BookList extends Component {
    showBooks() {
        return this.props.books.map((book) => {
           return( 
           <li className='list-group-item' key={book.title} onClick={()=>{this.props.selectBook(book)}}>
                {book.title}
            </li>
            );
        });
    }
    render() {
        return (
            <div className='col-md-4'>
                <h3>List of Books</h3>
                <ul className='list-group'>
                    {this.showBooks()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){ 
    return {
        books:state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default  connect(mapStateToProps,mapDispatchToProps)(BookList);