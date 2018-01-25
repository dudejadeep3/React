import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from "./components/checkbox";
import ColorDetail from './components/color-detail';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultColor: ['Green', 'Blue', 'Red'],
            favColors: [],
        }
    }

    modifyFav(isSelected, value) {
        if (isSelected) {
            var currentFav = this.state.favColors;
            var newFav = currentFav.concat(value);
            this.setState(
                {
                    favColors: newFav
                }
            );
        }
        else {
            this.setState(
                {
                    favColors: this.state.favColors.filter((color) => {
                        return value !== color;
                    })
                }
            );
        }
    }

    render() {
        var colorCheckBoxes = this.state.defaultColor.map((color) => {
            return (<CheckBox key={color} label={color} name='color' modifyFav={this.modifyFav.bind(this)}></CheckBox>);
        });
        return (
            <div>
                <h3>Select your faviorite colors:</h3>
                <div>
                    {colorCheckBoxes}
                </div>
                <div>
                    <h3>Your Faviorite Colors:</h3>
                    <ColorDetail colors={this.state.favColors} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.root'));

