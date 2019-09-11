import React from 'react'
import Navigation from '../components/Navigation'
import Section from '../components/Section'
import Home from '../components/Home'
import GlobalStyles from '../components/GlobalStyles'
import GlobalHead from '../components/GlobalHead'
// import ScrollAnimation from 'react-animate-on-scroll';





export default function index() {
    return (
        <div>
            <GlobalHead />
            <GlobalStyles />
            <Navigation />
            <Home />
            <Section 
                title='Skills'
                id='skills'
                image={'../static/lightToDarkBlue.png'}
                classNameProp='light'
                dark={false}
                skills
                />
            <Section 
                title='Portfolio'
                id='portfolio'
                image={'../static/darkBlueToLight.png'}
                classNameProp='dark'
                dark
                portfolio
                />
            <Section 
                title='Resume'
                id='resume'
                image={'../static/lightToDarkBlue.png'}
                classNameProp='light'
                dark={false}
                resume
                />
            <Section 
                title='Contact'
                id='contact'
                image={'../static/darkBlueToLight.png'}
                classNameProp='dark'
                dark
                contact
                />
            
        </div>
    )
}
