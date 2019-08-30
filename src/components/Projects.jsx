import React from "react"
import { Content, Inner, Divider } from "../elements"
import ProjectCard from "./Project-card"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const Projects = ({ offset, theme, highlightedProjects }) => (
  <div>
    <Divider
      bg="#edf2f7"
      clipPath="polygon(0 12%, 100% 0%, 100% 82%, 0 94%)"
      speed={-0.2}
      offset={offset}
      factor={1.5}
    />
    <Content speed={0.4} offset={offset} factor={1.5}>
      <Inner>
        <div>
          <h1 css={css({ color: theme.colors.greyDarker })}>
            Projects in the spotlight
          </h1>
          {highlightedProjects.map(({ project }) => {
            return (
              <ProjectCard
                key={project.document[0].id}
                project={project.document[0]}
              />
            )
          })}
        </div>
      </Inner>
    </Content>
  </div>
)

export default withTheme(Projects)
