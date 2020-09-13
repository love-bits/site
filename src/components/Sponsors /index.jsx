import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

export function Sponsors() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sponsors/jetbrains.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <S.Sponsors id="sponsors">
      <h3>Nossos Apoiadores</h3>
      <ul>
        <li>
          <a
            href="https://www.jetbrains.com/pt-br/"
            rel="no-referre"
            target="_blank"
          >
            <S.SponsorsImg
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="JetBrains"
              title="JetBrains"
            />
          </a>
        </li>
      </ul>
    </S.Sponsors>
  )
}
