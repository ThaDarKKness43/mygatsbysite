import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import {
    container,
    heading,
    nav,
    navLinks,
    navLinkItem,
    navLinkText,
    logo
  } from './layout.module.css'
import { Typography } from '@mui/material';

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
      <AppBar className={nav}>
        {
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={logo}>
                  Daniel Azevedo
              </Link>
            </li>
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
              <Link to="/projects" className={navLinkText}>
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
      
      <br />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout