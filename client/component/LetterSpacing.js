import React, {Component} from 'react'
import Radium from 'radium'
import {letterSpacing} from '../style/style.js'

@Radium
export default class LetterSpacing extends Component {
    render() {
        return (
            <div>
                <h3>Letter spacing</h3>

                <p>As I mentioned earlier, font size is not the only style property that we need to define text
                    components. Letter spacing is another useful property which we can use to tighten up large headings
                    or allow smaller headings to breathe.</p>

                <p>3 or 4 letter spacing values should do the trick.</p>

                <div style={letterSpacing.base}>
                    <div><div style={letterSpacing.one}>Aa</div><div>-2px</div></div>
                    <div><div style={letterSpacing.two}>Aa</div><div>-1px</div></div>
                    <div><div style={letterSpacing.three}>Aa</div><div>-0.5px</div></div>
                    <div><div style={letterSpacing.four}>Aa</div><div>1px</div></div>
                </div>
            </div>
        )
    }
}