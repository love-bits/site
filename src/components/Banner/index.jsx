import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

export function Banner({ logo }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "persons.png" }) {
        childImageSharp {
          fluid(maxWidth: 417) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <S.Banner>
      <S.BannerImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Pessoas conversando"
      />

      <S.Info>
        <img src={logo.src} alt="Logo Love Bits" />
        <h2>Próximo Meetup</h2>
        <span>31/05 às 18h</span>
        <button>MAIS INFORMAÇÕES</button>
      </S.Info>
    </S.Banner>
  )
}
