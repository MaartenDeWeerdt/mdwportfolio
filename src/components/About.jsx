import React from "react"
import { Content, Divider } from "../elements"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const About = ({ offset, about }) => (
  <div>
    <Divider
      bg="#2d3748"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <h1>About</h1>
      <div
        css={{ color: "white" }}
        dangerouslySetInnerHTML={{ __html: about.data.content.html }}
      />
    </Content>
  </div>
)

export default withTheme(About)
