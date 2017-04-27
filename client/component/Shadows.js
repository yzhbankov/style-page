import React, {Component} from 'react'

export default class Shadows extends Component {
    render() {
        return (
            <div>
                <h3>Shadows</h3>
                <p>Shadows are another commonly used style property in most UIs. From what I’ve seen, a lot of designers
                    just come up with shadows off-the-cuff while designing components. The same goes for most style
                    properties actually. Designing in isolation like this often leads to inconsistent UIs.</p>

                <p>Let’s take a step back and consider what we’re trying to achieve with our shadows. We’re obviously
                    trying to add some perspective to the UI but it’s likely that many components can benefit from the
                    same effect. So let’s abstract the styles away from the individual components and into our global
                    style palette.</p>

                <p>These four shadows should be enough to style every component in our system:</p>
                <ul>
                    <li>A subtle shadow to raise interactive components and add affordance.</li>
                    <li>A more pronounced shadow for a hover effect on components.</li>
                    <li>A strong shadow to give perspective to dropdowns/popovers and other similar components.</li>
                    <li>A distant shadow for modal components.</li>
                </ul>
                <div className='shadowsSet'>
                    <div className='shadowOne'></div>
                    <div className='shadowTwo'></div>
                    <div className='shadowThree'></div>
                    <div className='shadowFour'></div>
                </div>
            </div>
        )
    }
}