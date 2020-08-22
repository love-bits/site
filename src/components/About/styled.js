import styled from "@emotion/styled"

export const About = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #333333;
  position: relative;

  @media (max-width: 900px) {
    height: fit-content;
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 859px;
  margin: -50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: space-around;
  }
`

export const AboutText = styled.div`
  width: 100%;
  max-width: 500px;
  color: #fff;
  font-size: 16px;
  line-height: 25px;

  h3 {
    display: none;
  }

  @media (max-width: 900px) {
    padding: 2rem;

    h3 {
      display: block;
    }
  }
`

export const AboutImage = styled.div`
  text-align: center;

  @media (max-width: 900px) {
    display: none;
  }

  h3 {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    padding-bottom: 4rem;
  }
`
