import React, {Component} from 'react'
import Radium from 'radium'
import {typeScale} from '../style/style.js'

@Radium
export default class TypeScale extends Component {
    render() {
        return (
            <div>
                <h3>Type scale</h3>

                <p>In order to create an appropriate visual hierarchy on each screen, we will need to define a number of
                    different font sizes.</p>

                <p>Just like with notes in a piece of music, our type should adhere to a scale. This helps to sustain a
                    smooth vertical rhythm. This can sound a bit daunting at first, but luckily, some very smart people
                    have already figured it all out for us over the years. Tim Brown has built a great website to
                    display various type scales. Adam Morse has open-sourced his implementation of the diatonic type
                    scale. I generally find the “Major Third” scale works well for most web products.</p>

                <p>The next step is to decide roughly which font sizes we will need, then plot them on our “Major Third”
                    type scale.</p>
                <ul>
                    <li>Default (1em) for standard text that will appear in many places throughout our marketing site,
                        UI etc. 16px is the default browser font size so let’s run with that.
                    </li>
                    <li>A slightly larger size for large body copy in a blog for example.</li>
                    <li>A couple of larger sizes for headings and sub-headings.</li>
                    <li>A very large size for section titles.</li>
                    <li>A ridiculously large size maybe for prices on a pricing page for example.</li>
                    <li>We will also need some smaller sizes for smaller body copy, input hints and other secondary
                        text.
                    </li>
                </ul>
                <div>
                    <div>6em</div>
                    <div style={typeScale.typeScaleOne}>Extra large</div>
                    <div>3em</div>
                    <div style={typeScale.typeScaleTwo}>Extra large</div>
                    <div>2.4em</div>
                    <div style={typeScale.typeScaleThree}>Extra large</div>
                    <div>1.6em</div>
                    <div style={typeScale.typeScaleFour}>Extra large</div>
                    <div>1.25em</div>
                    <div style={typeScale.typeScaleFive}>Extra large</div>
                    <div>1em</div>
                    <div style={typeScale.typeScaleSix}>Extra large</div>
                    <div>0.6em</div>
                    <div style={typeScale.typeScaleSeven}>Extra large</div>
                </div>
            </div>
        );
    }
}