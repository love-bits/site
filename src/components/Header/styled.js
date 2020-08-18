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

  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 575px) {
    img {
      display: none;
    }

    nav {
      width: 100vw;
      height: 100vh;
      background-color: #e74c3c;
      position: fixed;
      top: 0;
      right: ${props => (props.open ? 0 : "-343px")};
      z-index: 1;
      transition: all 0.2s;

      &:after {
        content: "";
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: ${props => (props.open ? "-100%" : "100%")};
        background-color: #fff;
      }
    }

    ul {
      flex-direction: column;

      li {
        padding: 1rem 0;
      }
    }
  }

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

  nav {
    width: 343px;
  }

  ul {
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

      &:last-of-type {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: -5px;
          left: -8px;
          width: 100px;
          height: 31px;
          background-color: #e74c3c;
          z-index: -1;
          border-radius: 5px;
        }

        a {
          color: #fff;
        }
      }
    }
  }
`

export const Logo = styled(Img)`
  width: 33px;
`

export const NavButton = styled.button`
  position: relative;
  right: ${props => (props.open ? "343px" : 0)};
  border: 0;
  background-color: transparent;
  font-size: 2.5rem;
  color: #e74c3c;
  z-index: 2;

  @media (min-width: 575px) {
    display: none;
  }
`
