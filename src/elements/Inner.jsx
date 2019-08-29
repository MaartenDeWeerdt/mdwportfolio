import React from "react"
import { css } from "@emotion/core"

const breakpoints = [1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Inner = ({ children, className }) => (
  <div
    className={className}
    css={css({
      width: "100%",
      [mq[0]]: {
        width: "65%",
      },
    })}
  >
    {children}
  </div>
)

export default Inner
