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
    font-size: 36px;
  }
  img {
    max-width: 83px;
    max-height: 80px;
  }

  button {
    width: 190px;
    background-color: #565387;
    color: #fff;
    border: 0;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 20px;
  }
`
