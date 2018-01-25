import React from 'react';
import WeatherResultElement from './weather-result-element';

const WeatherResultList = ({ weatherList }) => {
    const weatherListElements = weatherList.map((weatherElement) => {
        return <WeatherResultElement key={weatherElement.name} resultElement={weatherElement} />
    });
    return (
        <table className='table col-md-6'>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    <th>Max. Temperature</th>
                    <th>Min. 
                        Temperature</th>
                </tr>
            </thead>
            <tbody>
                {weatherListElements}
            </tbody>

        </table>
    );
}

export default WeatherResultList;