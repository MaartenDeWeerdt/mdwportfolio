import React from "react"
import Img from "gatsby-image"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const breakpoints = [400]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const ProjectCard = ({ project, bg, theme }) => (
  <div
    href={project.data.uid}
    target="_blank"
    rel="noreferrer noopener"
    css={css({
      width: "100%",
      paddingTop: "4rem",
      textDecoration: "none",
      color: theme.colors.greyDarker,
      background: bg || "none",
    })}
  >
    <div
      css={css({
        display: "inline-block",
        verticalAlign: "top",
        width: "100%",
        [mq[0]]: {
          maxWidth: project.data.thumbnail.localFile ? "60%" : "100%",
        },
      })}
    >
      <h2 css={css({ color: theme.colors.greyDarker })}>
        {project.data.title.text.toUpperCase()}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: project.data.content.html }} />
    </div>
    {project.data.thumbnail.localFile && (
      <Img
        css={css({
          display: "inline-block",
          width: "100%",
          [mq[0]]: {
            width: "40%",
          },
        })}
        fluid={project.data.thumbnail.localFile.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    )}
  </div>
)

export default withTheme(ProjectCard)
