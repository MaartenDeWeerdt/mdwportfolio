import React from "react"
import { Content, Inner, Divider } from "../elements"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const About = ({ offset, about, theme }) => (
  <div>
    <Divider
      //bg="linear-gradient(to right, #16222a, #1f303b, #28404d, #315060, #3a6073)"
      bg={theme.colors.blueLight}
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={0.2}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <Inner css={{ color: theme.colors.white }}>
        <div css={css({ color: theme.colors.white })}>
          <h1 css={css({ color: theme.colors.white })}>About</h1>
          <div dangerouslySetInnerHTML={{ __html: about.data.content.html }} />
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(About)
