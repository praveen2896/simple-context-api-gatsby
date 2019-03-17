import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>
      you can change the value of counter here too will reflect in homepage also
    </p>
    <p>that's context-api!!!</p>
    <Counter />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
