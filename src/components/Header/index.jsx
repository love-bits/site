import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "react-scroll"

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
    <S.Container>
      <S.Header open={showSidebar}>
        <Link to="banner" activeClass="active" offset={-100} duration={500}>
          <S.Logo fluid={logo} />
          <h1>{site.siteMetadata.title}</h1>
        </Link>

        <S.NavButton
          onClick={() => setShowSidebar(!showSidebar)}
          open={showSidebar}
        >
          <AiOutlineMenu />
        </S.NavButton>

        <nav>
          <ul onClick={() => setShowSidebar(false)}>
            <li>
              <Link to="about" activeClass="active" offset={-70} duration={500}>
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="meetings"
                activeClass="active"
                offset={-70}
                duration={500}
              >
                Encontros
              </Link>
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
    </S.Container>
  )
}
