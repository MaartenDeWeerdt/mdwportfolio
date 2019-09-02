import React from "react"
import Img from "gatsby-image"
import { Content, Inner, Divider } from "../elements"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const breakpoints = [400, 600, 900, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const Technologies = ({ offset, theme, technologies }) => (
  <div>
    <Divider
      bg={theme.colors.greyLight}
      clipPath=""
      speed={0.3}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <Inner css={css({ [mq[3]]: { padding: "0 !important" } })}>
        <div>
          <h1 css={css({ color: theme.colors.greyDarker })}>Technologies</h1>
          <div
            css={css({
              display: "flex",
              flexWrap: "wrap",
              [mq[1]]: {
                justifyContent: "center",
              },
            })}
          >
            {technologies.nodes.map(
              (technology, index) =>
                technology.data.icon.localFile && (
                  <div
                    key={`technology_${index}`}
                    css={css({
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "75%",
                      padding: "1rem",
                      [mq[0]]: {
                        width: "50%",
                      },
                      [mq[1]]: {
                        padding: "2rem",
                        height: "150px",
                      },
                      [mq[2]]: {
                        width: "25%",
                        height: "150px",
                      },
                    })}
                  >
                    <Img
                      css={css({ width: "100%", height: "auto" })}
                      fluid={
                        technology.data.icon.localFile.childImageSharp.fluid
                      }
                      alt="Gatsby Docs are awesome"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Technologies)
