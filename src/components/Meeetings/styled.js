import styled from "@emotion/styled"

export const Meeetings = styled.section`
  width: 100%;
  max-width: 859px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem auto 0 auto;

  @media (max-width: 900px) {
    padding: 2rem;
  }

  h3 {
    font-weight: bold;
    font-size: 24px;
    color: #e74c3c;
    justify-self: flex-start;
  }

  > button {
    justify-self: center;
  }

  > div {
    width: 100%;
    height: 520px;
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      padding: 0.3rem;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border: 1px solid #fff;
      background-color: #bbb;
      border-radius: 50px;
    }

    @media (max-width: 900px) {
      padding: 0.5rem;
    }
  }
`

export const MeetingCard = styled.div`
  width: 250px;
  height: 450px;
  padding-bottom: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(196, 196, 196, 0.29);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  transform: ${({ isActive }) => (isActive ? `scale(1.08)` : `scale(1)`)};

  &:hover {
    opacity: 1;
  }

  a {
    width: 154px;
    height: 39px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    background-color: #e74c3c;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
  }

  + div {
    margin-left: 2rem;
  }
`
export const MeetingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  img {
    max-width: 100%;
  }

  h4 {
    font-size: 24px;
    font-weight: bold;
    color: #e74c3c;
  }

  time {
    font-size: 15px;
    font-weight: bold;
  }

  p {
    text-align: center;
    display: none;
  }
`
export const AllMeetingsButton = styled.a`
  width: 200px;
  height: 36px;
  border: 0;
  border-radius: 5px;
  background-color: #333333;
  color: #fff;
  font-size: 15px;
  margin: 0 auto;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`
