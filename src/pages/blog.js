import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"

import Layout from "../Components/layout"
import blogStyles from "./blog.module.scss"



export default function BlogPage() {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(sort:{
      fields:published,
      order:DESC
    }){
      edges{
        node{
          title
          slug
          published(formatString:"MMM Do, YYYY")
        }
      }
    }
  }
  `)

  return <div>
  <Layout><h1>Blog</h1>
  
  <ol className={blogStyles.posts}>
  {data.allContentfulBlogPost.edges.map(function (edge) {
    return <li className={blogStyles.post}>
    <Link to ={"/blog/" + edge.node.slug}>
    <h2>{edge.node.title}</h2>
    <p>{edge.node.published}</p>
    </Link>
    </li>
  })}
  
  </ol>
  </Layout>
  </div>


  
}