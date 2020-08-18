import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import * as S from "./styled"
import { useState } from "react"

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

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <S.Header open={showSidebar}>
      <div>
        <S.Logo fluid={logo} />
        <h1>{site.siteMetadata.title}</h1>
      </div>

      <S.NavButton
        onClick={() => setShowSidebar(!showSidebar)}
        open={showSidebar}
      >
        <AiOutlineMenu />
      </S.NavButton>

      <nav>
        <ul onClick={() => setShowSidebar(false)}>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#meetings">Encontros</a>
          </li>
          <li>
            <a
              href="https://discord.gg/jDVnYrr"
              target="_blank"
              rel="noreferrer"
            >
              Faça Parte
            </a>
          </li>
        </ul>
        {showSidebar && (
          <S.CloseNav>
            <AiOutlineClose onClick={() => setShowSidebar(false)} />
          </S.CloseNav>
        )}
      </nav>
    </S.Header>
  )
}
