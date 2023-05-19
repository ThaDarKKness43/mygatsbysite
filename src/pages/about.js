// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import html from '../images/HTML5.png'
import {
  skills,
  skill
} from '../components/layout.module.css'

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
            <div className={skill}>
                <img src={html} alt="Logo" />
                <p>HTML</p>
            </div>
         </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage