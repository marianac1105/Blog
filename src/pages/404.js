import React from "react"

import { Link } from "gatsby"

import Layout from "../Components/layout"
import Head from "../Components/head"

export default function NotFound (){
    return (
        <Layout>
        <Head title="404" />
        <h1>Page not found</h1>
        <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}