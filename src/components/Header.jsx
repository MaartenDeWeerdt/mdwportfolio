import React from "react"
import { Content, Inner } from "../elements"
import css from "@emotion/css"
import { withTheme } from "emotion-theming"

const Header = ({ header, offset, theme }) => (
  <div>
    <Content speed={0.4} offset={offset}>
      <Inner>
        <h1 css={css({ color: theme.colors.greyDarker })}>
          {header.data.title.text}
        </h1>
        <h3
          css={css({
            color: theme.colors.greyDarker,
          })}
        >
          <mark>{header.data.subtitle.text}</mark>
        </h3>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Header)
