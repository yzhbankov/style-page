import React, {Component} from 'react'

import Colour from '../component/Colour.js'
import Shadows from '../component/Shadows.js'
import TypeScale from '../component/TypeScale.js'
import BorderRadii from '../component/BorderRadii.js'
import SpacingScale from '../component/SpacingScale.js'
import LetterSpacing from '../component/LetterSpacing.js'

import '../style/style.sass'

export default class App extends Component {
    render() {
        return (<div>
            <h2>Style page</h2>
            <Colour />
            <Shadows />
            <TypeScale />
            <BorderRadii />
            <SpacingScale />
            <LetterSpacing />
        </div>)
    }

}