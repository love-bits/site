import React from "react"
import { Global, css } from "@emotion/core"

const resetBody = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
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
