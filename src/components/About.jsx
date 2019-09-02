import React from "react"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"
import Img from "gatsby-image"
import { Content, Inner, Divider } from "../elements"

const breakpoints = [600]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const About = ({ offset, about, theme }) => (
  <div>
    <Divider
      bg={theme.colors.greyLight}
      clipPath="polygon(0 5%, 100% 15%, 100% 100%, 0 90%)"
      speed={0.2}
      offset={offset}
    />
    <Content speed={0.4} offset={offset}>
      <Inner bg={theme.colors.greyLight}>
        <div
          css={css({
            display: "flex",
            flexDirection: "column-reverse",
            width: "100%",
            paddingTop: "4rem",
            textDecoration: "none",
            color: theme.colors.greyDarker,

            [mq[0]]: {
              flexDirection: "row",
            },
          })}
        >
          <Img
            css={css({
              display: "block",
              border: "10px solid white",
              borderRadius: "5px",
              width: "100%",
              maxHeight: "100%",
              [mq[0]]: {
                marginRight: "5%",
                width: "30%",
                maxHeight: "300px",
              },
            })}
            fluid={about.data.image.localFile.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
          <div
            css={css({
              width: "100%",
              [mq[0]]: {
                width: "65%",
              },
            })}
          >
            <h1
              css={css({
                color: theme.colors.greyDarker,
              })}
            >
              About Me
            </h1>
            <div
              css={css({
                color: theme.colors.greyDarker,
              })}
              dangerouslySetInnerHTML={{ __html: about.data.content.html }}
            />
          </div>
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(About)
