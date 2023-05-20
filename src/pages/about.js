// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import html from '../images/HTML5.png'
import css from '../images/CSS3.png'
import javascript from '../images/JavaScript.png'
import react from '../images/React.png'
import {
  skills,
  skills2,
  skill,
  skill2,
  skill3,
  skill4,
} from '../components/layout.module.css'
import { Margin } from '@mui/icons-material'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm 25 years and I've always been interested in computers since 
         I was young and I have always wanted to learn more and work in 
         this area. In high school I took a professional course in a 
         Management Informatics. Then I went to college where I did a 
         professional course in Networks and Computer Systems. Initially, 
         that specific area was what I wanted to pursue the most, but 
         after having completed my internship, I decided to move on and 
         get a degree in Computer Science.</p>
         <br />
         <p>Languages I can work with: </p>
         {/* <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
         </ul> */}

         <div className={skills}>
            <div className={skill}>
                <img src={html} alt="Logo" />
                <p>HTML</p>
            </div>
            <div className={skill2}>
                <img src={css} alt="Logo" />
                <p>CSS</p>
            </div>
            <div className={skill3}>
                <img src={javascript} alt="Logo" />
                <p>JavaScript</p>
            </div>
            <div className={skill4}>
                <img src={react} alt="Logo" />
                <p>React</p>
            </div>
         </div>

         {/* <br />

         <div className={skills2}>
            <div className={skill3}>
                <img src={javascript} alt="Logo" />
                <p>JavaScript</p>
            </div>
            <div className={skill4}>
                <img src={react} alt="Logo" />
                <p>React</p>
            </div>
         </div> */}

         {/* <div className={skills2}>
            <div className={skill}>
                <img src={html} alt="Logo" />
                <p className={skilljavascript}>JavaScript</p>
            </div>
            <div className={skill2}>
                <img src={html} alt="Logo" />
                <p>React</p>
            </div>
         </div> */}
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage