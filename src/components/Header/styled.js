import styled from "@emotion/styled"
import Img from "gatsby-image"

export const Header = styled.header`
  width: 100%;
  max-width: 859px;
  margin: 0 auto;
  height: 100px;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 24px;
    padding-left: 1rem;
    font-family: "Rubik", sans-serif;
    font-weight: normal;
  }

  ul {
    width: 343px;
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
      font-size: 18px;
      font-weight: 300;

      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
`

export const Logo = styled(Img)`
  width: 33px;
`
