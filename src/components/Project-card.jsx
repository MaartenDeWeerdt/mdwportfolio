import React from "react"
import Img from "gatsby-image"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

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
        maxWidth: project.data.thumbnail.localFile ? "60%" : "100%",
      })}
    >
      <h2 css={css({ color: theme.colors.greyDarker })}>
        {project.data.title.text.toUpperCase()}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: project.data.content.html }} />
    </div>
    {project.data.thumbnail.localFile && (
      <Img
        style={{
          width: "40%",
          display: "inline-block",
        }}
        fluid={project.data.thumbnail.localFile.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    )}
  </div>
)

export default withTheme(ProjectCard)
