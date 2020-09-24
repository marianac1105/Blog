import React from "react"
import Layout from "../Components/layout"
import Head from "../Components/head"

export default function ContactPage() {
  return<Layout>
  <Head title="Contact"/>
      <h1>Contact</h1>
      <p>
        Please contact me on {" "}
        <a
          href="https://www.instagram.com/marianac1105/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
    </Layout>
  
}
