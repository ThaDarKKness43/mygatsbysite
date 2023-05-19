import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from './layout.module.css'
import { layout } from '@chakra-ui/react'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      { <header className={siteTitle}>{data.site.siteMetadata.title}</header> }
      { /*<Navbar />*/ }
        { <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
                About Me
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Projects
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contacts" className={navLinkText}>
              Contacts
            </Link>
          </li>
        </ul> }
      {/* { <Navbar /> } */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout