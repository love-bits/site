import React from "react"
import { Global, css } from "@emotion/core"

const resetBody = css`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;

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
  }

  button {
    cursor: pointer;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={resetBody} />

      <main>{children}</main>
    </>
  )
}

export default Layout
