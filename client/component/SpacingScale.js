import React, {Component} from 'react'

export default class SpacingScale extends Component {
    render() {
        return (
            <div>
                <h3>Spacing scale</h3>

                <p>The most commonly used style property in almost any design is whitespace. Whether we’re spacing apart
                    links in a header, spacing apart items in a grid, adding some distance between an avatar and a link
                    or padding out a dropdown component — no whitespace in our product should be arbitrary or
                    unintentional.</p>

                <p>Like with type, by adhering to a spacing scale, we can ensure that each of our components and layouts
                    will be uniform. My favourite go-to spacing scale is Material design’s 8dp grid. Elliot Dahl has
                    written a great article about the 8pt grid system and its benefits.</p>

                <p>Sticking to 8dp increments, we can plot out a number of spacing values that we can use to design
                    every single component and layout in our suite of products.</p>

                <div>spacing scale</div>

                <p> We can also use these spacing values to define a set of widths, heights and line-heights that we can
                    reuse for sizing buttons, form inputs, avatars and other similar components. Since these components
                    often appear alongside each other throughout web products, it helps if they follow the same sizing
                    scale to avoid any unwanted discrepancies.
                </p>
                <div className='spacingScale'>
                    <div className='spacingScaleOuter'><div className='spacingScaleOne'><div>8px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleTwo'><div>16px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleThree'><div>24px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleFour'><div>32px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleFive'><div>40px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleSix'><div>48px</div></div></div>
                    <div className='spacingScaleOuter'><div className='spacingScaleSeven'><div>64px</div></div></div>
                </div>
            </div>
        )
    }
}