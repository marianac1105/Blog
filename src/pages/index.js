import React from "react"
import {Link} from "gatsby"
import Layout from "../Components/layout"
import Head from "../Components/head"
import computer from "./home-office.jpg"


export default function Home() {
  
  return <Layout>
  <Head title="Home"/>
  <h1>Hello</h1>
  <h2>I'm Mariana, a web developer living in gourgeus Sydney</h2>
  <img alt="computer" src={computer}/>
  <p>Need a Web developer? <Link to = "/contact">Contact me</Link></p>
  </Layout>
  

  
}
