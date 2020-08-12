import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

export function Header({ logo }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.Header>
      <div>
        <S.Logo fluid={logo} />
        <h1>{site.siteMetadata.title}</h1>
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
