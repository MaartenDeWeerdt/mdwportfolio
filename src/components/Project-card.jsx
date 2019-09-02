import React from "react"
import Img from "gatsby-image"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const breakpoints = [600]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const isEven = n => {
  return n % 2 === 0
}

const ProjectCard = ({ project, index, bg, theme }) => (
  <div
    href={project.data.uid}
    target="_blank"
    rel="noreferrer noopener"
    css={css({
      display: "flex",
      flexDirection: "row",
      width: "100%",
      paddingTop: "4rem",
      textDecoration: "none",
      color: theme.colors.white,
      background: bg || "none",
      [isEven(index)]: {
        flexDirection: "row-reverse",
      },
    })}
  >
    <div
      css={css({
        display: "inline-block",
        verticalAlign: "top",
        width: "100%",
        [mq[0]]: {
          maxWidth: project.data.thumbnail.localFile ? "55%" : "100%",
        },
      })}
    >
      <h2>{project.data.title.text.toUpperCase()}</h2>
      <div dangerouslySetInnerHTML={{ __html: project.data.content.html }} />
    </div>
    {project.data.thumbnail.localFile && (
      <Img
        css={css({
          display: "inline-block",
          border: "20px solid white",
          borderRadius: "10px",
          width: "100%",
          [mq[0]]: {
            width: "40%",
            marginRight: "5%",
            marginLeft: 0,
            [isEven(index)]: {
              marginRight: 0,
              marginLeft: "5%",
            },
          },
        })}
        fluid={project.data.thumbnail.localFile.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    )}
  </div>
)

export default withTheme(ProjectCard)
