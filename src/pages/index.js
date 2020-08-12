import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import { Banner, Header, SEO } from "../components"

const IndexPage = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "love-bits-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header logo={placeholderImage.childImageSharp.fluid} />
      <Banner logo={placeholderImage.childImageSharp.fluid} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
