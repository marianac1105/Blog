import { Link } from "gatsby"
import React from "react"
import Layout from "../Components/layout"

export default function AboutUsPage() {
  return <Layout>
      <h1>About Me</h1>
      <p>
        I'm a full-stack developer at Helloworld Travel. I love to turn ideas
        into solutions
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
        
      </p>
      </Layout>
    
      
}
