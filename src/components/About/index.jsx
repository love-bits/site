import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styled"

export function About() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "person-reading.png" }) {
        childImageSharp {
          fluid(maxWidth: 203) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <S.About>
      <svg
        viewBox="0 0 1440 320"
        css={{
          backgroundColor: "#fff",
        }}
      >
        <path
          fill="#565387"
          fill-opacity="1"
          d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <S.Content>
        <S.AboutText>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não
            altera o pão duris. Si num tem leite então bota uma pinga aí
            cumpadi! Paisis, filhis, espiritis santis. Posuere libero varius.
            Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Manduma pindureta
            quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean
            aliquam molestie leo, vitae iaculis nisl. Praesent malesuada urna
            nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
          </p>
        </S.AboutText>

        <S.AboutImage>
          <h3>Quem Somos?</h3>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            css={{ width: 203 }}
            alt="Pessoa sentada lendo um jornal"
          />
        </S.AboutImage>
      </S.Content>
    </S.About>
  )
}
