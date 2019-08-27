import React from "react"
import { withTheme } from "emotion-theming"

const ProjectCard = ({ project, bg, theme }) => (
  <a
    href={project.data.uid}
    target="_blank"
    rel="noreferrer noopener"
    css={{
      borderRadius: "0.5rem",
      width: "100%",
      boxShadow: theme.boxShadow.m,
      position: "relative",
      textDecoration: "none",
      padding: "2rem",
      color: "white",
      background: bg || "none",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important",
      "&:hover": {
        color: "white !important",
        transform: "translateY(-5px)",
        boxShadow: theme.boxShadow.l,
      },
    }}
  >
    <h2>{project.data.title.text.toUpperCase()}</h2>
    <div dangerouslySetInnerHTML={{ __html: project.data.content.html }} />
  </a>
)

export default withTheme(ProjectCard)
