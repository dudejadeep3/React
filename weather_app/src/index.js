import React, { Component } from 'react';
import ReactDom from 'react-dom';
import WeatherSearch from './components/search_box';
import axios from 'axios';
import WeatherResultList from './components/weather-result-list';

const api_url='http://api.openweathermap.org/data/2.5/weather?q=';
const key='647484b6f599864d536d93e256eec107';
class App extends Component {
    constructor(props){
        super();
        this.state={
            result:[]
        }
    }

    getWeather(city){
        console.log("inside index");
        var url=api_url+city+'&appid='+key;
        axios.get(url).then(function(response){
            var currentResult = this.state.result;
            var newResult =currentResult.concat(response.data);
            this.setState({
                result:newResult
            });
        }.bind(this));
        
    }

    render() {
        return (
            <div>
                <WeatherSearch getWeather={this.getWeather.bind(this)}/>
                <WeatherResultList weatherList={this.state.result}/>
            </div>
        );
    }   
}

ReactDom.render(<App/>,document.querySelector('.root'));