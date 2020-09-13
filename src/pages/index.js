import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import {
  Banner,
  Header,
  SEO,
  About,
  Meeetings,
  Social,
  Sponsors,
} from "../components"

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
      <About />
      <Meeetings />
      <Sponsors />
      <Social />
    </Layout>
  )
}

export default IndexPage
