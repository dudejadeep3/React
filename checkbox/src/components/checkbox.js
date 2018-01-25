import React from 'react';

class CheckBox extends React.Component {

    onSelectColor(event){
        if(event.target.checked){
            this.props.modifyFav(true,event.target.value);
        }else{
            this.props.modifyFav(false,event.target.value);
        }
    }
    render() {
        return (
            <div>
                <input type='checkbox' value={this.props.label} onChange={this.onSelectColor.bind(this)}/>{this.props.label}<br/>
            </div>
        );
    }
}

export default CheckBox;