import React, {Component} from 'react'

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

                <div className='paletteColours'>
                    <div className='colourBlue'></div>
                    <div className='colourOrange'></div>
                    <div className='colourGreen'></div>
                    <div className='colourRed'></div>
                    <div className='colourGray'></div>
                </div>
            </div>)
    }
}