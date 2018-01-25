import React, { Component} from 'react';
//import ReactDOM from 'react-dom';

/*create the search bar componenet
every class based component must have a 
 render() function and this render function 
 must return some JSX.*/
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:""
        };
    }

    termChanged=function(event){
        console.log(event.target.value);
        this.setState({
            term:event.target.value
        });
        
    }
    render() {
        return (
            <div>
                <label>Search Term: </label>
                <input value={this.state.term} onChange={this.termChanged.bind(this)}/>
                <br/>
                Your search term is: {this.state.term}
                <br/>
            </div>
        );
    }
}


export default SearchBar;