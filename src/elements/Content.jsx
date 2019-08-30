import React from "react"
import { css } from "@emotion/core"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const breakpoints = [400, 900, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Content = ({ speed, offset, children, className, factor }) => (
  <ParallaxLayer
    css={css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    {children}
  </ParallaxLayer>
)

export default Content
