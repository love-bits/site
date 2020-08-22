import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaDiscord } from "react-icons/fa"

import { isLater } from "../../utils/helpers"

import * as S from "./styled"

const allMeetings = require("../../data/meetings.json")

export function Banner({ logo }) {
  useEffect(() => {
    const current = allMeetings.meetings[0]
    const [currentDate] = current.date.split(" ")
    setHasNewMeeting(isLater(currentDate))

    setCurrentMeeting({
      date: current.date.replace(" horas", "h"),
      url: current.link,
    })
  }, [])

  const [hasNewMeeting, setHasNewMeeting] = useState(false)
  const [currentMeeting, setCurrentMeeting] = useState({
    date: "",
    url: "",
  })

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
    <S.Banner id="banner">
      <S.BannerImg
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Pessoas conversando"
      />

      {hasNewMeeting ? (
        <S.Info>
          <img src={logo.src} alt="Logo Love Bits" />
          <h2>Próximo Meetup</h2>
          <span>{currentMeeting.date}</span>
          <a href={currentMeeting.url} target="_blank" rel="noreferrer">
            MAIS INFORMAÇÕES
          </a>
        </S.Info>
      ) : (
        <S.Join>
          <FaDiscord />
          <p>Faça Parte da nossa comunidade no Discord</p>
          <a
            href="https://discord.com/invite/jDVnYrr"
            target="_blank"
            rel="noreferrer"
          >
            Junte-se
          </a>
        </S.Join>
      )}
    </S.Banner>
  )
}
