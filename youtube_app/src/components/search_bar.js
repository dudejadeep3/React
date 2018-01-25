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
        this.setState({
            term:event.target.value
        });
        this.props.searchYoutube(event.target.value);
    }
    search(){
        //this.props.changeSearch(this.state.term);
        this.props.searchYoutube(this.state.term);
    }
    render() {
        return (
            <div>
                <label>Search Term: </label>
                <input value={this.state.term} onChange={this.termChanged.bind(this)}/> 
                <button onClick={this.search.bind(this)} className='btn btn-default'>Search</button>
                <br/>
            </div>
        );
    }
}


export default SearchBar;