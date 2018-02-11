import React, { Component } from 'react';
import BookList from '../containers/book-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookDetail from '../containers/book-detail';
import AddBook from '../containers/add-book';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={BookList}></Route>
                    <Route path="/bookdetail" component={BookDetail}></Route>
                    <Route path="/addbook" component={AddBook}></Route>
                </div>
            </Router>
        );
    }
}
export default App;