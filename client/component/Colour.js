import React, {Component} from 'react'
import Radium from 'radium'
import {colours} from '../style/style.js'

@Radium
export default class Colour extends Component {
    render() {
        return (
            <div>
                <h3>Colour</h3>

                <p>Let’s start with the most obvious style property — the only style property it seems modern design
                    tools
                    understand can be named, stored and reused: colour.
                </p>

                <p>For our primary brand colour, let’s choose blue. For our secondary brand colour, let’s go with its
                    complementary counterpart: orange.</p>

                <div style={colours.paletteColours}>
                    <div style={[colours.base, colours.colourBlue]}></div>
                    <div style={[colours.base, colours.colourOrange]}></div>
                    <div style={[colours.base, colours.colourRed]}></div>
                    <div style={[colours.base, colours.colourGreen]}></div>
                    <div style={[colours.base, colours.colourGray]}></div>
                </div>
            </div>)
    }
}