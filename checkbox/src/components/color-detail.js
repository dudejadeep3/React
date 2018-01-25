import React from 'react';

const ColorDetail = function (props) {
    var colorList = props.colors.map((color) => {
        return (
            <li key={color}>{color}</li>
        );
    })
    return (
        <div>
            <ul>
                {colorList}
            </ul>
        </div>
    );
}

export default ColorDetail;