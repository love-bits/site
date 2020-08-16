import React from "react"

import * as S from "./styled"

const allMeetings = require("../../data/meetings.json")

export function Meeetings() {
  console.log()
  return (
    <S.Meeetings>
      <h3>Encontros</h3>
      <div>
        {allMeetings.meetings.map((meeting, index) => (
          <S.MeetingCard key={index}>
            <S.MeetingCardInfo>
              <img src={meeting.img} alt={meeting.title} />
              <h4>Meetup #{allMeetings.meetings.length - index}</h4>
              <time>{meeting.date}</time>
              <p>{meeting.title}</p>
            </S.MeetingCardInfo>

            <a href={meeting.link} target="_blank">
              Acessar
            </a>
          </S.MeetingCard>
        ))}
      </div>

      <S.AllMeetingsButton
        href="https://www.youtube.com/channel/UCRFoyHS51F6R8IB4xBsPORQ/featured"
        target="_blank"
      >
        Ver todos
      </S.AllMeetingsButton>
    </S.Meeetings>
  )
}
