import React, { Component } from 'react'
import Tilt from 'react-tilt'
import './logo.css'

export class logo extends Component {
    render() {
        return (
            <div>
                <Tilt className="Tilt" options={{ max : 25 }}>
                    <div className="Tilt-inner"> HELLO </div></Tilt>
            </div>
        )
    }
}

export default logo
