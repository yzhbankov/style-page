import React, {Component} from 'react'

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
                <div className='borderRadii'>
                    <div className='borderRadiiOne'></div>
                    <div className='borderRadiiTwo'></div>
                    <div className='borderRadiiThree'></div>
                </div>
                <div>2px, 4px and 8px border radii</div>
            </div>
        );
    }
}