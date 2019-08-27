import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const breakpoints = [400, 900, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const StyledDiv = styled.div`
  width: 100%;
  text-align: left;
`
const Content = ({ speed, offset, children, className, factor }) => (
  <ParallaxLayer
    css={css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      padding: "1rem",
      [mq[0]]: {
        padding: "3rem",
      },
      [mq[1]]: {
        padding: "4rem",
      },
      [mq[2]]: {
        padding: "5rem",
      },
    })}
    speed={speed}
    offset={offset}
    factor={factor || 1}
  >
    <StyledDiv>{children}</StyledDiv>
  </ParallaxLayer>
)

export default Content
