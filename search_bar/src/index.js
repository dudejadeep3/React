import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';

//create the component that will generate some HTML
const App = function (props) {//functional component
    return (
        <div>
            <h1>Welcome to React from JS</h1><br/>
            <h3>Welcome {props.name} to our city {props.city}</h3>
            <SearchBar></SearchBar>
        </div>
    );
}
//render the component on the page
//(add the generated HTML to the DOM)

ReactDOM.render(<App name='John Doe' city='New York'/>, document.querySelector('.root'));

/** App component will be transpiled into following. (props object)
 * App({
        name:"Deepanshu",
        city:"Delhi"
    });
*/
