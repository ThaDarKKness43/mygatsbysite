import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'
import AppBar from '@mui/material/AppBar';
import {
    container,
    heading,
    nav,
    navLinks,
    navLinkItem,
    navLinkText,
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
      { /*<header className={siteTitle}>{data.site.siteMetadata.title}</header>*/ }
      { /*<Navbar />*/ }
      <AppBar className={nav} position="static">
        { <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
                About
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
        </AppBar>
      {/* { <Navbar /> } */}
      
      <br />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout