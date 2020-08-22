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
    <S.About id="about">
      <svg
        viewBox="0 0 1440 320"
        css={{
          backgroundColor: "#fff",
        }}
      >
        <path
          fill="#333333"
          fillOpacity="1"
          d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <S.Content>
        <S.AboutText>
          <h3>Quem Somos?</h3>
          <p>
            Nossa missão é manter um espaço aberto para a propagação democrática
            de conhecimento diverso e livre de preconceitos.
          </p>

          <p>
            Em relação ao nosso nome, o Love vem da nossa paixão por tecnologia
            e, ao mesmo tempo, é uma singela homenagem à primeira programadora
            da História, Ada Lovelace. O Bits, pois referenciam os átomos do
            nosso universo, e no final, todos convergimos neles,
            independentemente de tecnologia.
          </p>

          <p>
            Estamos decididos a compartilhar conhecimento livremente a todos
            através de encontros virtuais e presenciais, sem nenhum julgamento
            ou preconceito.
          </p>

          <p>
            Como comunidade prezamos pela diversidade e democratização dos
            espaços, trabalhamos continuamente para criar um espaço acolhedor,
            onde qualquer um possa se sentir à vontade para partilhar
            conhecimento com a comunidade.
          </p>

          <p>
            Se identificou de alguma forma? Sinta-se a vontade para entrar em
            contato conosco através de alguma de nossas redes sociais e só
            vem!!! ;)
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
