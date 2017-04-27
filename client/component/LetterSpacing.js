import React, {Component} from 'react'

export default class LetterSpacing extends Component {
    render() {
        return (
            <div>
                <h3>Letter spacing</h3>

                <p>As I mentioned earlier, font size is not the only style property that we need to define text
                    components. Letter spacing is another useful property which we can use to tighten up large headings
                    or allow smaller headings to breathe.</p>

                <p>3 or 4 letter spacing values should do the trick.</p>

                <div className='letterSpacing'>
                    <div><div className='letterSpacingOne'>Aa</div><div>-2px</div></div>
                    <div><div className='letterSpacingTwo'>Aa</div><div>-1px</div></div>
                    <div><div className='letterSpacingThree'>Aa</div><div>-0.5px</div></div>
                    <div><div className='letterSpacingFour'>Aa</div><div>1px</div></div>
                </div>
            </div>
        )
    }
}