import React from 'react';

const WeatherResultElement = ({ resultElement }) => {
    return (
        <tr>
            <td>
                {resultElement.name}
            </td>
            <td>
                {resultElement.main.temp}
            </td>
            <td>
                {resultElement.main.pressure}
            </td>
            <td>
                {resultElement.main.humidity}
            </td>
            <td>
                {resultElement.main.temp_min}
            </td>
            <td>
                {resultElement.main.temp_max}
            </td>
        </tr>
    );
}

export default WeatherResultElement;