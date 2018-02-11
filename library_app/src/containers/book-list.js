import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectBook } from '../actions/index';

class BookList extends React.Component {
    showBooks() {
        return this.props.books.bookList.map((book) => {
            return (
                <li className='list-group-item' key={book.title} onClick={()=>{this.props.selectBook(book)}}>
                    <Link to={{pathname:"/bookdetail"}}>{book.title}</Link>
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div className='row col-md-6'>
                    <h1>Library Collection</h1>
                    <ul className='list-group'>
                        {this.showBooks()}
                    </ul>
                </div>
                <div className='row col-md-12'>
                    <Link to={{ pathname: "/addbook" }} className='btn btn-primary'>Add Book</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook:selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);