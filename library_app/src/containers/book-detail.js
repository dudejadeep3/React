import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteBook } from '../actions/deletebook';

class BookDetail extends React.Component {
    render() {
        return (
            <div>
                <h1>Book Details</h1>
                <div className='row col-xs-4'>
                    <Link to={{ pathname: "/" }} className='btn btn-primary'>Back</Link>
                </div>
                <br />
                <div className='row col-xs-12'>
                    <div className='row'>
                        <div className='col-xs-2'><label>Title</label></div>
                        <div className='col-xs-6'>{this.props.book.title}</div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2'><label>Author</label></div>
                        <div className='col-xs-6'>{this.props.book.author}</div>
                    </div>
                    <div className='row'>
                        <div className='col-xs-2'><label>Desciption</label></div>
                        <div className='col-xs-6'>{this.props.book.description}</div>
                    </div>
                </div>
                <div className='row col-xs-6'>
                    <Link to={{ pathname: "/" }}>
                        <button className='btn btn-danger' onClick={()=>{this.props.deleteBook(this.props.book)}}>Delete Book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activebook
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteBook:deleteBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);