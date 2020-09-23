import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyle from "./footer.module.scss"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyle.footer}>
      <p>Made by {data.site.siteMetadata.author}, Copyright 2020</p>
    </footer>
  )
}

export default Footer
