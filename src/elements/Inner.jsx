import React from "react"
import { css } from "@emotion/core"

const breakpoints = [400, 900, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Inner = ({ children, className, bg }) => (
  <div
    className={className}
    css={css({
      width: "100%",
      padding: "1rem",
      background: bg,
      backgroundColor: bg,
      [mq[0]]: {
        padding: "3rem",
      },
      [mq[1]]: {
        padding: "4rem",
        background: "none",
        backgroundColor: "none",
      },
      [mq[2]]: {
        width: "65%",
        padding: "5rem",
        backgroundColor: "unset",
      },
    })}
  >
    {children}
  </div>
)

export default Inner
