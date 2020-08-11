import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
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
    <S.Header>
      <div>
        <S.Logo fluid={data.placeholderImage.childImageSharp.fluid} />
        <h1>{siteTitle}</h1>
      </div>

      <ul>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#meetups">Encontros</a>
        </li>
        <li>
          <a href="#join">Faça Parte</a>
        </li>
      </ul>
    </S.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
