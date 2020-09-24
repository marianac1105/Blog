import React from "react"
import Layout from "../Components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         date
//         title
//       }
//       html
//     }
// //   }
// `

export const query = graphql`
query($slug:String!){
  contentfulBlogPost(slug: {eq: $slug}){
    title
    published(formatString: "MMM Do, YYYY")
    body{
      json
    }
  }
}
`

export default function BlogText(props) {
  const options = {
    renderNode: {
      "embeded-asset-block":(node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.title.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
    {/* //   <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    //   <p>{props.data.markdownRemark.frontmatter.title}</p>
    //   <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
    <h1>{props.data.contentfulBlogPost.title}</h1>
     <p>{props.data.contentfulBlogPost.published}</p>
     {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}
