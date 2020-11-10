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
      <p>© 2020 {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer
