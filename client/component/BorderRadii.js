import React, {Component} from 'react'
import Radium from 'radium'
import {borderRadii} from '../style/style.js'

@Radium
export default class BorderRadii extends Component {
    render() {
        return (
            <div>
                <h3>Border radii</h3>

                <p>Now it’s just a matter of applying the same process to every single style property that accepts
                    custom values. For rounding corners, we will need the following corner radius values:</p>
                <ul>
                    <li>Small border radius for tiny components like checkboxes, tags and labels.</li>
                    <li>Medium border radius for buttons and inputs and similar components.</li>
                    <li>Large border radius for cards, modals and other large components.</li>
                </ul>
                <div style={borderRadii.base}>
                    <div style={borderRadii.one}></div>
                    <div style={borderRadii.two}></div>
                    <div style={borderRadii.three}></div>
                </div>
                <div>2px, 4px and 8px border radii</div>
            </div>
        );
    }
}