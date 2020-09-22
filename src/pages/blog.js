import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"

import Layout from "../Components/layout"



export default function BlogPage() {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return <div>
  <Layout><h1>Blog</h1>
  
  <ol>
  {data.allMarkdownRemark.edges.map(function (edge) {
    return <li>
    <Link to ={"/blog/" + edge.node.fields.slug}>
    <h2>{edge.node.frontmatter.title}</h2>
    <p>{edge.node.frontmatter.date}</p>
    </Link>
    </li>
  })}
  
  </ol>
  </Layout>
  </div>


  
}