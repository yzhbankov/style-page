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
                    <div style={[colours.base, colours.blue]}></div>
                    <div style={[colours.base, colours.orange]}></div>
                    <div style={[colours.base, colours.red]}></div>
                    <div style={[colours.base, colours.green]}></div>
                    <div style={[colours.base, colours.gray]}></div>
                </div>
            </div>)
    }
}