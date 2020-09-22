const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {

    const { createNodeField } = actions
  
      if(node.internal.type === "MarkdownRemark"){
          const slug = path.basename(node.fileAbsolutePath, ".md")
          
          createNodeField ({
              node,
              name: 'slug',
              value: slug
          })


      }
      
  
  }

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const res = await graphql(`query  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  // Create blog post pages.
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.fields.slug}`,
      component: blogPostTemplate,
      context: {slug: edge.node.fields.slug
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}

