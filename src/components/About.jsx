import React from "react"
import { Content, Inner, Divider } from "../elements"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const About = ({ offset, about, theme }) => (
  <div>
    <Divider
      bg={theme.colors.greyLight}
      clipPath="polygon(0 5%, 100% 15%, 100% 100%, 0 90%)"
      speed={0.2}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <Inner bg={theme.colors.blueLight}>
        <div css={css({ color: theme.colors.greyDarker })}>
          <h1 css={css({ color: theme.colors.greyDarker })}>About Me</h1>
          <div
            css={css({ color: theme.colors.greyDarker })}
            dangerouslySetInnerHTML={{ __html: about.data.content.html }}
          />
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(About)
