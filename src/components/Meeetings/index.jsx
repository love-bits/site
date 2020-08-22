import React, { useEffect, useState } from "react"

import { isLater } from "../../utils/helpers"

import * as S from "./styled"

const allMeetings = require("../../data/meetings.json")

export function Meeetings() {
  return (
    <S.Meeetings id="meetings">
      <h3>Encontros</h3>
      <div>
        {allMeetings.meetings.map((meeting, index) => (
          <S.MeetingCard
            key={index}
            isActive={isLater(meeting.date.split(" ")[0])}
          >
            <S.MeetingCardInfo>
              <img src={meeting.img} alt={meeting.title} />
              <h4>Meetup #{allMeetings.meetings.length - index}</h4>
              <time>{meeting.date}</time>
              <p>{meeting.title.replace("by", "")}</p>
            </S.MeetingCardInfo>

            <a href={meeting.link} target="_blank" rel="noreferrer">
              Acessar
            </a>
          </S.MeetingCard>
        ))}
      </div>

      <S.AllMeetingsButton
        href="https://www.youtube.com/channel/UCRFoyHS51F6R8IB4xBsPORQ/featured"
        target="_blank"
        rel="noreferrer"
      >
        Ver todos
      </S.AllMeetingsButton>
    </S.Meeetings>
  )
}
