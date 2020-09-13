import styled from "@emotion/styled"
import Img from "gatsby-image"

export const Sponsors = styled.section`
  width: 100%;
  max-width: 859px;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 2rem auto 0 auto;
  padding: 2rem;

  h3 {
    font-weight: bold;
    font-size: 24px;
    color: #e74c3c;
    justify-self: flex-start;
  }

  @media (max-width: 900px) {
    + div {
      padding-top: 100px;
    }
  }

  p {
    color: #565387;
    font-size: 24px;
    font-weight: bold;
    padding: 1rem;
  }

  ul {
    width: 100%;
    display: flex;
    padding: 0;

    li {
      list-style: none;
      font-size: 30px;
      margin: 0.5rem;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
`

export const SponsorsImg = styled(Img)`
  width: 150px;
`
