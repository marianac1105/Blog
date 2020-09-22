import React from "react"
import { useStaticQuery, graphql} from "gatsby"

function Footer (){
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            author
          }
        }
      }`)

    return <p>Made by {data.site.siteMetadata.author}, Copyright 2020</p>
}

export default Footer;