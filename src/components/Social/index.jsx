import React from "react"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai"

import SocialSVG from "./social"

import * as S from "./styled"

export function Social() {
  return (
    <S.Social>
      <SocialSVG />

      <p>Siga nossas redes sociais</p>

      <ul>
        <li>
          <a
            href="https://www.facebook.com/Love-Bits-106953344376684"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook fill="#4267B2" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_love.bits/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram fill="#db3180" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_LoveBits"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare fill="#50ABF1" />
          </a>
        </li>
      </ul>
    </S.Social>
  )
}
