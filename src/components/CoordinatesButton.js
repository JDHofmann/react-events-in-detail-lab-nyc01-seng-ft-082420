import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleButton = (e) => {
        let coordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
            <button
                onClick={this.handleButton}
            
            >CoordinatesButton</button>
        )
    }

}
