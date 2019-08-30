import React from "react"
import { css } from "@emotion/core"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const breakpoints = [900]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Divider = ({
  speed,
  offset,
  factor,
  bg,
  fill,
  clipPath,
  children,
  className,
}) => (
  <ParallaxLayer
    css={css({
      position: "absolute",
      width: "100%",
      height: "100%",
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: "currentColor",
      },
      [mq[0]]: {
        clipPath,
      },
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
