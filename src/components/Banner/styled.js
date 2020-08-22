import styled from "@emotion/styled"
import Img from "gatsby-image"

export const Banner = styled.section`
  width: 100%;
  max-width: 859px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    width: 190px;
    background-color: #333333;
    color: #fff;
    border: 0;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const BannerImg = styled(Img)`
  width: 417px;
  @media (max-width: 900px) {
    display: none;
  }
`

export const Info = styled.div`
  width: 228px;
  height: 350px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative;

  h2 {
    font-size: 20px;
  }

  span {
    font-size: 34px;
    text-transform: uppercase;
    text-align: center;
  }
  img {
    max-width: 83px;
    max-height: 80px;
  }
`

export const Join = styled.div`
  width: 228px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    font-size: 5rem;
    color: #333;
  }

  p {
    text-align: center;
    font-weight: 500;
  }

  a {
    margin-top: 10px;
  }
`
