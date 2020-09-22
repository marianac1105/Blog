import React from "react"
import Layout from "../Components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`

export default function BlogText(props) {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.title}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}
