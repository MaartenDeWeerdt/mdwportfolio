import React from "react"
import { css } from "@emotion/core"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Content = ({ speed, offset, children, factor }) => (
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
