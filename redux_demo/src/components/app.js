import React, {Component} from 'react';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-details';

class App extends Component{
    render(){
        return(
        <div>
            <BookList/>
            <BookDetails/>
        </div>);
    }
}
export default App;