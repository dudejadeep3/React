import React, { Component } from 'react';

class WeatherSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    onTextChange(event) {
        var city = event.target.value;
        this.setState({ 
            city: city 
        });
    }

    getWeather(){
        console.log("in search_box");
        this.props.getWeather(this.state.city);
        this.setState({city:''});
    }

    render() {
        return (
            <div>
                <label>Enter City Name:</label>
                <input type="text" value={this.state.city} onChange={this.onTextChange.bind(this)}/>
                <button className='btn btn-primary' onClick={this.getWeather.bind(this)}>Get Weather</button>
            </div>
        );
    }
}
export default WeatherSearch;