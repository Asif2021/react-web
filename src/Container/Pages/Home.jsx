import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../Components/Heading'
import Common from '../Pages/Common'


function Home() {
    return (
        <>
          <Common name='Find the Best with'
            imgsrc={'/images/1.jpg'}
            visit='/services'
            btname='Get Started' />
                    </>
    )
}

export default Home
