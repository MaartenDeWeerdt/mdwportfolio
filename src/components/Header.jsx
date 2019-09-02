import React from "react"
import { Content, Inner, Divider } from "../elements"
import css from "@emotion/css"
import { withTheme } from "emotion-theming"

const Header = ({ header, offset, theme }) => (
  <div>
    <Divider
      //bg="linear-gradient(to right, #28b595, #5cc98d, #8ddb82, #c1eb77, #f9f871)"
      clipPath="polygon(0 0%, 100% 0%, 100% 60%, 0 90%)"
      speed={0.1}
      offset={offset}
      factor={1.5}
    />
    <Content speed={0.4} offset={offset}>
      <Inner>
        <h1 css={css({ color: theme.colors.greyDarker })}>
          {header.data.title.text}
        </h1>
        <h2
          css={css({
            color: theme.colors.greyDarker,
          })}
        >
          <mark>{header.data.subtitle.text}</mark>
        </h2>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Header)
