import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to Context-api-starter</p>
    <Counter />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
