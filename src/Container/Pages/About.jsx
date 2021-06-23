import React from 'react'
import Common from '../Pages/Common'

const About = () => {
    return (
        <div>
            <Common name='Welcome to About Page'
            imgsrc={'/Images/2.jpg'}
            visit='/contact'
            btname='Contact Now' />
        </div>
    )
}

export default About
