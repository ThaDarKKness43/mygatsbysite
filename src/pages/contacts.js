// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const Contact = () => {
  return (
    <Layout pageTitle="Contacts">
      <p>Email: dani_ts_azevedo@hotmail.com</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default Contact